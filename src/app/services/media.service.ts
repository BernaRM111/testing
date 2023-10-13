import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private readonly devHoursUrl = 'https://api-testing-service-bernarm111.cloud.okteto.net/hours';
  private readonly proxySizeUrl = 'https://api-testing-service-bernarm111.cloud.okteto.net/size';

  constructor(private http: HttpClient) {}

  getDevHours(): Observable<number[]> {
    return this.http.get<{data: number[]}>(this.devHoursUrl).pipe(
      map(response => response.data)
    );
  }

  getProxySize(): Observable<number[]> {
    return this.http.get<{data: number[]}>(this.proxySizeUrl).pipe(
      map(response => response.data)
    );
  }

  calculateAverage(data: number[]): number {
    return data.reduce((acc, val) => acc + val, 0) / data.length;
  }
}
