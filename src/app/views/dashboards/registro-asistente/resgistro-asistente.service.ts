import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';
import { CONSTANTS } from '@views/auth/constants';
import { LoginService } from '@views/auth/sign-in/sign-in.service';

@Injectable({providedIn: 'root'})
export class registroAsistenteService {
  token: string = '';


    constructor(
      private api:ApiService,
      private httpClient: HttpClient,
      private loginService: LoginService
    ) {
    }

      postUsuarioAsistente(body: any){
        this.token = this.loginService.accessToken
        console.log('token', this.token)
        const urlBase= this.api.baseUrl
        const url = `${urlBase}admin/register`

        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`
        });

        return new Promise((resolve, reject)=>{
            this.httpClient.post(url, body,{ headers })
            .subscribe(response=>{
                resolve(response)
            },error=>{
                reject(error)
            })
        })
}
}
