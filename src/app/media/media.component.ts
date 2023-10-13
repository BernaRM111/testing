import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-media',
  template: ''
})
export class MediaComponent implements OnInit {
  devHoursAverage = 0;
  proxySizeAverage = 0;

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.subscribeAndCalculateAverage(this.mediaService.getDevHours(), (average) => this.devHoursAverage = average);
    this.subscribeAndCalculateAverage(this.mediaService.getProxySize(), (average) => this.proxySizeAverage = average);
  }

  private subscribeAndCalculateAverage(observable: Observable<number[]>, callback: { (average: any): any; (average: any): any; (arg0: number): void; }): void {
    observable.subscribe(data => {
      callback(this.calcularMedia(data));
    });
  }

  private calcularMedia(data: number[]): number {
    return data.reduce((acc, val) => acc + val, 0) / data.length;
  }
}

