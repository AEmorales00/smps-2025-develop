import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';
import { CONSTANTS } from '../constants';

@Injectable({providedIn: 'root'})
export class LoginService {

  private _authenticated: boolean = false;
  //private _jwtHelper = new JwtHelperService();
  private sessionAccessTokenKey = CONSTANTS.SESSION_ACCESS_TOKEN_KEY
    //private sessionActivOrganizationkey = CONSTANTS.SESSION_ACTIVE_ORGANIZATION_KEY

  constructor(private apiService:ApiService) { }

  set accessToken(token: string)
  {
      sessionStorage.setItem(this.sessionAccessTokenKey, token);
  }



  get accessToken(): string
  {
      return sessionStorage.getItem(this.sessionAccessTokenKey) ?? '';
  }

  // get decodedToken() {
  //     return this._jwtHelper.decodeToken(this.accessToken)
  // }


  postLogin(user:any){
    const url = `auth/login`
      return new Promise((resolve, reject)=>{
          this.apiService.PostMethod(url, user, {}, 'No se ha podido iniciar sesión.')
          .subscribe((response:any)=>{
              resolve(response)
              this.accessToken = response.token;

          },error=>{
              reject(error)
          })
      })
  }


}
