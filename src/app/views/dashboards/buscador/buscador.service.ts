import { ResultadoBusqueda } from '@/app/models/resultadoBusqueda.model';
import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class BuscadorService {
  listado: BehaviorSubject<ResultadoBusqueda[]> = new BehaviorSubject<ResultadoBusqueda[]>([]);

  get listado$() {
    return this.listado.asObservable();
  }


  constructor(private api: ApiService) { }

  getBuscador(termino: string) {
    const url = `dashboard/search`;
    const params = {
      'query': termino
    };

    return new Promise((resolve, reject) => {
      this.api.GetMethod(url, params, 'No se ha podido obtener el listado de los Asistentes al SIMPOSIO UMG 2025.')
        .subscribe({
          next: (response: any) => resolve(this.listado.next(response)),
          error: (err: any) => reject(err)
        });
    });
  }

}
