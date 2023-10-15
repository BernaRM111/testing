import { Component, OnInit } from '@angular/core';
import { StddevService } from '../services/stddev.service';
import { Observable } from 'rxjs';
import { media } from '../media/media.component';

@Component({
  selector: 'app-stddev',
  template: ''
})

export class StddevComponent implements OnInit {
  /*devHoursStddev: number = 0;
  proxySizeStddev: number = 0;*/
  proxySizeStdDev: number = 0;
  devHoursStdDev: number = 0;

  constructor(private stddevService: StddevService) {}

  ngOnInit() {
    this.calculateProxySizeStandardDeviation();
    this.calculateDevHoursStandardDeviation();
  }

  /*ngOnInit(): void {
    this.subscribeAndCalculateStddev(this.stddevService.getDevHours(), (stddev) => this.devHoursStddev = stddev);
    this.subscribeAndCalculateStddev(this.stddevService.getProxySize(), (stddev) => this.proxySizeStddev = stddev);
  }*/

  /*private subscribeAndCalculateStddev(observable: Observable<number[]>, callback: { (stddev: any): any; (stddev: any): any; (arg0: number): void; }): void {
    observable.subscribe(data => {
      callback(this.calcularDesviacionEstandar(data));
    });
  }*/

  /*private calcularDesviacionEstandar(data: number[]): number {
    const n = data.length;
    const mean = data.reduce((acc, val) => acc + val, 0) / n;
    const sumSquaredDiff = data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0);
    return Math.sqrt(sumSquaredDiff / (n - 1));
  }*/

  calculateProxySizeStandardDeviation() {
    this.stddevService.getProxySize().subscribe(data => { 
      const mean = media(data);
      this.proxySizeStdDev = this.calcularDesviacionEstandar(data, mean);
    });
  }

  calculateDevHoursStandardDeviation() {
    this.stddevService.getDevHours().subscribe(data => { 
      const mean = media(data);
      this.devHoursStdDev = this.calcularDesviacionEstandar(data, mean);
    });
  }

  calcularDesviacionEstandar(data: number[], mean: number): number {
    const squaredDifferences = data.map(val => Math.pow(val - mean, 2));
    const meanOfSquaredDifferences = media(squaredDifferences); // Usar la función calcularMedia
    const stdDev = Math.sqrt(meanOfSquaredDifferences);
    return stdDev;
  }

}

