import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { enviroment } from '@/enviroment/enviroment';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApiService {

  constructor(
    private router:Router,
    private http: HttpClient,
  ) { }

  get baseUrl() {
    return `${enviroment.apiUrl}/api/`
}

GetMethod<T>(endpoint: string, params?: any, errorMessage?: string): Observable<T> {
  let _params = new HttpParams();
  const url = `${this.baseUrl}${endpoint}`;
  return this.http.get<T>(url, { params })
    .pipe(
      tap(response => {
        // loading
      }),
      catchError((error: HttpErrorResponse) => {
        let _message = this.build_error_message(error, errorMessage);
        // alert
        return throwError(() => error); // throwError ahora se usa así
      })
    );
}


  PostMethod(endpoint: string, body:any, params?:any, errorMessage?:string, useEstablishment:boolean = false){
      let _params =  new HttpParams
      const url =`${this.baseUrl}${endpoint}` ;
      return this.http.post(url, body, {params})
                      .pipe(
                          tap(response => {

                          }),
                          catchError((error: HttpErrorResponse) => {

                              //
                              let _message = this.build_error_message(error,  errorMessage)
                              //this.showErrorMessage(_message)
                              return throwError(error)
                          })
                      );
  }

  putMethod(endpoint: string, body:any, params?:any, errorMessage?:string, useEstablishment:boolean = false) {

      let _params =  new HttpParams
      const url =`${this.baseUrl}${endpoint}`
      return this.http.put(url, body, {params})
                      .pipe(
                          tap(response => {

                          }),
                          catchError((error: HttpErrorResponse) => {

                              //
                              let _message = this.build_error_message(error,  errorMessage)

                              return throwError(error)
                          })
                      );
  }


  deleteMethod(endpoint: string,  params?:any, errorMessage?:string, useEstablishment:boolean = false) {

    let _params =  new HttpParams
    const url =`${this.baseUrl}/${endpoint}`
    return this.http.delete(url, {params})
                    .pipe(
                        tap(response => {

                        }),
                        catchError((error: HttpErrorResponse) => {

                            //
                            let _message = this.build_error_message(error,  errorMessage)

                            return throwError(error)
                        })
                    );
  }




  build_error_message(error: HttpErrorResponse, message?:string){
      let server_error_response = (error.error) ? error.error.msg : error.message
      return `Error ${error.status} - ${message} - el servidor respondió ${server_error_response}`;
  }

}
