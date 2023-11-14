import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';
import { Observable } from 'rxjs';
import { media } from '../media/media.component';

@Component({
  selector: 'app-stddev',
  template: ''
})

export class StddevComponent implements OnInit {
  proxySizeStdDev: number = 0;
  devHoursStdDev: number = 0;

  constructor(private mediaService: MediaService) {}

  ngOnInit() {
    this.calculateProxySizeStandardDeviation();
    this.calculateDevHoursStandardDeviation();
  }

  calculateProxySizeStandardDeviation() {
    this.mediaService.getProxySize().subscribe(data => { 
      const mean = media(data);
      this.proxySizeStdDev = this.desviacionEstandar(data, mean);
    });
  }

  calculateDevHoursStandardDeviation() {
    this.mediaService.getDevHours().subscribe(data => { 
      const mean = media(data);
      this.devHoursStdDev = this.desviacionEstandar(data, mean);
    });
  }

  desviacionEstandar(data: number[], mean: number): number {
    const squaredDifferences = data.map(val => Math.pow(val - mean, 2));
    const meanOfSquaredDifferences = media(squaredDifferences);
    const stdDev = Math.sqrt(meanOfSquaredDifferences);
    return stdDev;
  }

}

