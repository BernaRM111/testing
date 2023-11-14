import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegresionService {

  private baseURL: string = 'https://api-testing-service-bernarm111.cloud.okteto.net';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  
  getTest1(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/3a_test1`, this.httpOptions)
  }

  getTest2(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/3a_test2`, this.httpOptions)
  }

  getTest3(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/3a_test3`, this.httpOptions)
  }

  getTest4(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/3a_test4`, this.httpOptions)
  }
  

}