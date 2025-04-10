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
    //private _jwtHelper = new JwtHelperService();
  private sessionAccessTokenKey = CONSTANTS.SESSION_ACCESS_TOKEN_KEY
      //private sessionActivOrganizationkey = CONSTANTS.SESSION_ACTIVE_ORGANIZATION_KEY
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private loginService:LoginService,
    private apiService: ApiService
  ) {}

  set accessToken(token: string)
  {
      sessionStorage.setItem(this.sessionAccessTokenKey, token);
  }


  get accessToken(): string
  {
      return sessionStorage.getItem(this.sessionAccessTokenKey) ?? '';
  }


  postLogin(user:any){
    const url = `auth/login`
      return new Promise((resolve, reject)=>{
          this.apiService.PostMethod(url, user, {}, 'No se ha podido iniciar sesión.')
          .subscribe((response:any)=>{
              resolve(response)
              this.accessToken = response.token;
              this.saveSession(response.token)
          },error=>{
              reject(error)
          })
      })
  }


  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`/api/login`, { email, password }).pipe(
      map((user) => {
        if (user && user.token) {
          this.user = user
          this.saveSession(user.token)
        }
        return user
      })
    )
  }





  logout(): void {
    this.removeSession()
    this.user = null
  }

  get session(): string {
    return this.cookieService.get(this.authSessionKey)
  }

  saveSession(token: string): void {
    this.cookieService.set(this.authSessionKey, token)
  }

  removeSession(): void {
    this.cookieService.delete(this.authSessionKey)
  }
}
