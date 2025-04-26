import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { enviroment } from '@/enviroment/enviroment';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  get baseUrl() {
    return `${enviroment.apiUrl}/api/`;
  }

  private getAuthHeaders(): HttpHeaders {
    const token =
      localStorage.getItem('token') ||
      sessionStorage.getItem('_HANDO_AUTH_SESSION_KEY_') || '';

    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }

  GetMethod<T>(endpoint: string, params?: any, errorMessage?: string): Observable<T> {
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.get<T>(url, {
      params,
      headers: this.getAuthHeaders()
    }).pipe(
      tap(),
      catchError((error: HttpErrorResponse) => {
        this.handleAuthError(error);
        let _message = this.build_error_message(error, errorMessage);
        return throwError(() => error);
      })
    );
  }

  GetMethodBlob(endpoint: string, errorMessage?: string): Observable<Blob> {
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.get<Blob>(url, { 
        responseType: 'blob' as 'json', 
        headers: this.getAuthHeaders()
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let _message = this.build_error_message(error, errorMessage);
          return throwError(() => error);
        })
      );
  }
  

  PostMethod(endpoint: string, body: any, params?: any, errorMessage?: string): Observable<any> {
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.post(url, body, {
      params,
      headers: this.getAuthHeaders()
    }).pipe(
      tap(),
      catchError((error: HttpErrorResponse) => {
        this.handleAuthError(error);
        let _message = this.build_error_message(error, errorMessage);
        return throwError(() => error);
      })
    );
  }

  putMethod(endpoint: string, body: any, params?: any, errorMessage?: string): Observable<any> {
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.put(url, body, {
      params,
      headers: this.getAuthHeaders()
    }).pipe(
      tap(),
      catchError((error: HttpErrorResponse) => {
        this.handleAuthError(error);
        let _message = this.build_error_message(error, errorMessage);
        return throwError(() => error);
      })
    );
  }

  deleteMethod(endpoint: string, params?: any, errorMessage?: string): Observable<any> {
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.delete(url, {
      params,
      headers: this.getAuthHeaders()
    }).pipe(
      tap(),
      catchError((error: HttpErrorResponse) => {
        this.handleAuthError(error);
        let _message = this.build_error_message(error, errorMessage);
        return throwError(() => error);
      })
    );
  }

  private handleAuthError(error: HttpErrorResponse) {
    if (error.status === 401 || error.status === 403) {
      console.warn('No autorizado. Redirigiendo a login.');
      // this.router.navigate(['/auth/login']); // Descomenta si quieres redirigir
    }
  }

  build_error_message(error: HttpErrorResponse, message?: string) {
    let server_error_response = error?.error?.msg || error?.message || 'Error desconocido';
    return `Error ${error.status} - ${message} - el servidor respondió: ${server_error_response}`;
  }
}
