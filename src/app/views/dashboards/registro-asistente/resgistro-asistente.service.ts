import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';

@Injectable({providedIn: 'root'})
export class registroAsistenteService {
  constructor(private api:ApiService) { }

  postUsuarioAsistente(body: any){
    const url = `inscripcion/registrar-admin`
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
