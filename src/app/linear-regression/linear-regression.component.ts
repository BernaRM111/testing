import { Component, OnInit } from '@angular/core';
import { RegresionService } from '../services/regresion.service';
import { sumaX, sumaX2, sumaXY, sumaY, media} from "../common/calculate";

@Component({
  selector: 'app-linear-regression',
  templateUrl: './linear-regression.component.html',
  styleUrls: ['./linear-regression.component.css']
})
export class LinearRegressionComponent implements OnInit {

  x_test1: number[] = []
  y_test1: number[] = []

  x_test2: number[] = []
  y_test2: number[] = []

  x_test3: number[] = []
  y_test3: number[] = []

  x_test4: number[] = []
  y_test4: number[] = []

  constructor(
    private serviceTest1: RegresionService,

  ) { }
  ngOnInit(): void {
    this.serviceTest1.getTest1().subscribe((data: any) => {

      this.x_test1 = data.proxy_size;
      this.y_test1 = data.actual_added;
    })

    this.serviceTest1.getTest2().subscribe((data: any) => {
      this.x_test2 = data.proxy_size;
      this.y_test2 = data.actual_develop;
    })

    this.serviceTest1.getTest3().subscribe((data: any) => {
      this.x_test3 = data.plan_added;
      this.y_test3 = data.actual_added;
    })

    this.serviceTest1.getTest4().subscribe((data: any) => {
      this.x_test4 = data.plan_added;
      this.y_test4 = data.actual_develop;
    })
  }

  b1(valoresx: number[], valoresy: number[]): number {

    let sumXY = sumaXY(valoresx, valoresy);
    let sumX2 = sumaX2(valoresx);
    let mediaX = media(valoresx);
    let mediaY = media(valoresy);
  
    return (sumXY - valoresx.length * mediaX * mediaY) / (sumX2 - valoresx.length * mediaX * mediaX);
  }
  
  b0(x: number[], y: number[]): number {
    let xMean = media(x);
    let yMean = media(y)
    let b = this.b1(x, y)
    return yMean - b * xMean;
  }

  regresion(data: number, x: number[], y: number[]): number {
    let b0 = this.b0(x, y);
    let b1 = this.b1(x, y)
    let yk = (b0 + b1 * data)
    return yk
  }
}