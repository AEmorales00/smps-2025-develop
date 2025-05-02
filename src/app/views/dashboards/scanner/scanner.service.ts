import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';

@Injectable({providedIn: 'root'})
export class ScannerService {
  constructor(private api: ApiService) { }

  postUsuarioAsistente(body: any) {
    const url = `checkin`;

    return new Promise((resolve, reject) => {
      this.api.PostMethod(url, body)
        .subscribe(
          response => resolve(response),
          error => reject(error)
        );
    });
  }


}
