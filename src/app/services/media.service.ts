import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private baseURL: string = 'https://api-testing-service-bernarm111.cloud.okteto.net';

  constructor(private http: HttpClient) {}

  getDevHours(): Observable<number[]> {
    return this.http.get<{data: number[]}>(`${this.baseURL}/hours`).pipe(
      map(response => response.data)
    );
  }

  getProxySize(): Observable<number[]> {
    return this.http.get<{data: number[]}>(`${this.baseURL}/size`).pipe(
      map(response => response.data)
    );
  }
}
