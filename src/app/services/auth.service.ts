import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

import { CookieService } from 'ngx-cookie-service'
import type { Observable } from 'rxjs'
import { User } from '@store/authentication/auth.model'
import { LoginService } from '@views/auth/sign-in/sign-in.service'
import { CONSTANTS } from '@views/auth/constants'
import { ApiService } from '@core/services/api.service'

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  user: User | null = null

  public readonly authSessionKey = '_HANDO_AUTH_SESSION_KEY_'

  private _authenticated: boolean = false;
  private sessionAccessTokenKey = CONSTANTS.SESSION_ACCESS_TOKEN_KEY

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private loginService: LoginService,
    private apiService: ApiService
  ) {}

  set accessToken(token: string) {
    sessionStorage.setItem(this.sessionAccessTokenKey, token);
    localStorage.setItem('token', token); // ✅ También lo guardamos aquí
  }

  get accessToken(): string {
    return (
      sessionStorage.getItem(this.sessionAccessTokenKey) ||
      localStorage.getItem('token') || ''
    );
  }

  postLogin(user: any) {
    const url = `auth/login`;
    return new Promise((resolve, reject) => {
      this.apiService
        .PostMethod(url, user, {}, 'No se ha podido iniciar sesión.')
        .subscribe(
          (response: any) => {
            // ✅ Guarda en sessionStorage, localStorage y cookie
            this.accessToken = response.token;
            this.saveSession(response.token);
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`/api/login`, { email, password }).pipe(
      map((user) => {
        if (user && user.token) {
          this.user = user;
          this.accessToken = user.token;
          this.saveSession(user.token);
        }
        return user;
      })
    );
  }

  logout(): void {
    this.removeSession();
    this.user = null;
    sessionStorage.removeItem(this.sessionAccessTokenKey);
    localStorage.removeItem('token'); // ✅ limpiar también
  }

  get session(): string {
    return this.cookieService.get(this.authSessionKey);
  }

  saveSession(token: string): void {
    this.cookieService.set(this.authSessionKey, token);
  }

  removeSession(): void {
    this.cookieService.delete(this.authSessionKey);
  }
}
