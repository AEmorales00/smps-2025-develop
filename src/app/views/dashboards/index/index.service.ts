import { AsistentesInterface } from '@/app/models/asistentes.model';
import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';

@Injectable({ providedIn: 'root' })
export class IndexService {
  constructor(
    private apiservice: ApiService
  ) {}

  getAsistentes(): Promise<AsistentesInterface[]> {
    const url = `dashboard/participants`;
    return new Promise((resolve, reject) => {
      this.apiservice.GetMethod<AsistentesInterface[]>(url, {}, 'No se ha podido obtener el listado de los Asistentes al SIMPOSIO UMG 2025.')
        .subscribe({
          next: (response: any) => resolve(response),
          error: (err: any) => reject(err)
        });
    });
  }

  confirmarPago(participantId: number, comment: string): Promise<any> {
    const url = `verify/${participantId}`;
    return new Promise((resolve, reject) => {
      this.apiservice.putMethod(url, { comment }, {}, 'No se pudo confirmar participante.')
        .subscribe({
          next: (response: any) => resolve(response),
          error: (err: any) => reject(err)
        });
    });
  }


  downloadCertificado(participantId: number): Promise<void> {
    const url = `cert/${participantId}/pdf`;
    return new Promise((resolve, reject) => {
      this.apiservice.GetMethodBlob(url, 'No se pudo descargar el certificado.')
        .subscribe({
          next: (blob: Blob) => {
            const link = document.createElement('a');
            const objectUrl = URL.createObjectURL(blob);
            link.href = objectUrl;
            link.download = `certificado-participante-${participantId}.pdf`;
            link.click();
            URL.revokeObjectURL(objectUrl);
            resolve();
          },
          error: (err: any) => reject(err)
        });
    });
  }

  getComprobante(nombre: string): Promise<Blob> {
    const url = `dashboard/comprobante/${nombre}`;
    return new Promise((resolve, reject) => {
      this.apiservice.GetMethodBlob(url, 'No se pudo descargar el certificado.')
        .subscribe({
          next: (blob: Blob) => resolve(blob),
          error: (err: any) => reject(err)
        });
    });
  }

  eliminarParticipante(id_participante:number){
    const url= `admin/participant/${id_participante}`
    return new Promise((resolve, reject)=>{
      this.apiservice.deleteMethod(url, 'Error al borrar participante')
      .subscribe(
        {next: (response: any) => resolve(response),
          error: (err: any) => reject(err)}
      )
    })
  }



}
