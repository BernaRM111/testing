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
    this.mediaService.getDevHours().subscribe(data => {
      this.devHoursStdDev = desviacionEstandar(data);
    });

    this.mediaService.getProxySize().subscribe(data => {
      this.proxySizeStdDev = desviacionEstandar(data);
    }); 
  }

}
export function desviacionEstandar(data: number[]): number {
  const mean = media(data)
  const squaredDifferences = data.map((val) => Math.pow(val - mean, 2));
  const variance = squaredDifferences.reduce((acc, val) => acc + val, 0) / data.length;
  return Math.sqrt(variance);
}

