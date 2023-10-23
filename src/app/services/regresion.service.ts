/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegresionService {
  private baseURL: string = 'https://api-testing-service-bernarm111.cloud.okteto.net';

  constructor(private http: HttpClient) {}

  getTest1(): Observable<number[]> {
    return this.http.get<{data: number[]}>(`${this.baseURL}/3a_test1`).pipe(
      map(response => response.data)
    );
  }

  getTest2(): Observable<number[]> {
    return this.http.get<{data: number[]}>(`${this.baseURL}/3a_test2`).pipe(
      map(response => response.data)
    );
  }

  getTest3(): Observable<number[]> {
    return this.http.get<{data: number[]}>(`${this.baseURL}/3a_test3`).pipe(
      map(response => response.data)
    );
  }

  getTest4(): Observable<number[]> {
    return this.http.get<{data: number[]}>(`${this.baseURL}/3a_test4`).pipe(
      map(response => response.data)
    );
  }

}*/

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegresionService {


  constructor(
    private readonly http: HttpClient
  ) { }

  test1 = 'https://api-testing-service-bernarm111.cloud.okteto.net/3a_test1'
  test2 = 'https://api-testing-service-bernarm111.cloud.okteto.net/3a_test2'
  test3 = 'https://api-testing-service-bernarm111.cloud.okteto.net/3a_test3'
  test4 = 'https://api-testing-service-bernarm111.cloud.okteto.net/3a_test4'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getTest1(): Observable<any> {
    return this.http.get<any>(this.test1, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getTest2(): Observable<any> {
    return this.http.get<any>(this.test2, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getTest3(): Observable<any> {
    return this.http.get<any>(this.test3, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getTest4(): Observable<any> {
    return this.http.get<any>(this.test4, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error: any) {
    let errorMessage = ''
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code ${error.status} Mensage: ${error.message}`
    }
    window.alert(errorMessage)
    return throwError(errorMessage)
  }
}