import { AsistentesInterface } from '@/app/models/asistentes.model';
import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';

@Injectable({providedIn: 'root'})
export class IndexService {
  constructor(
    private apiservice:ApiService
  ) { }

  getAsistentes(): Promise<AsistentesInterface[]> {
    const url = `participants`;
    return new Promise((resolve, reject) => {
      this.apiservice.GetMethod<AsistentesInterface[]>(url, {}, 'No se ha podido obtener el listado de los Asistentes al SIMPOSIO UMG 2025.')
        .subscribe({
          next: (response) => resolve(response),
          error: (err) => reject(err)
        });
    });
  }


}
