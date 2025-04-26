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

  confirmarPago(participantId: number): Promise<any> {
    const url = `verify/${participantId}`; // ✅ ahora sí correcto
    return new Promise((resolve, reject) => {
      this.apiservice.putMethod(url, {}, {}, 'No se pudo confirmar al participante.')
        .subscribe({
          next: (response: any) => resolve(response),
          error: (err: any) => reject(err)
        });
    });
  }

  downloadCertificado(participantId: number): Promise<any> {
    const url = `cert/${participantId}/pdf`;
    return new Promise((resolve, reject) => {
      this.apiservice.GetMethodBlob(url, 'No se pudo descargar el certificado.')
        .subscribe({
          next: (response: any) => resolve(response),
          error: (err: any) => reject(err)
        });
    });
  }
  
}
