import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '@/enviroment/enviroment';
import { ApiService } from '@core/services/api.service';

@Injectable({providedIn: 'root'})
export class RegistroAsistentesService {

  constructor(
    private api:ApiService) { }

    postUsuarioAsistente(body: any){
      const url = `public/register`
      return new Promise((resolve, reject)=>{
          this.api.PostMethod(url, body, {}, 'No se ha podido realializar el registro, intente mas tarde.')
          .subscribe(response=>{
              resolve(response)
          },error=>{
              reject(error)
          })
      })
  }


}
