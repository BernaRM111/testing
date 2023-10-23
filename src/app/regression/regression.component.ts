import { Component, OnInit } from '@angular/core';
import { sumaX, sumaXY, sumaX2, sumaY2 } from "../common/calculate";
import { RegresionService } from '../services/regresion.service';

@Component({
  selector: 'app-regression',
  templateUrl: './regression.component.html',
  styleUrls: ['./regression.component.css']
})
export class RegressionComponent implements OnInit {
  constructor(private serviceTest1: RegresionService,) { }

  x_test1: number[] = []
  y_test1: number[] = []

  x_test2: number[] = []
  y_test2: number[] = []

  x_test3: number[] = []
  y_test3: number[] = []

  x_test4: number[] = []
  y_test4: number[] = []

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

  correlationCoefficient(x: number[], y: number[]): number {

    const n = x.length;
    const sumaValoresX = sumaX(x);
    const sumaValoresY = sumaX(y);
    const sumaValoresXY = sumaXY(x, y);
    const sumaValoresX2 = sumaX2(x);
    const sumaValoresY2 = sumaY2(y);

    const numerator = n * sumaValoresXY - sumaValoresX * sumaValoresY;
    const denominator = Math.sqrt((n * sumaValoresX2 - sumaValoresX * sumaValoresX) * (n * sumaValoresY2 - sumaValoresY * sumaValoresY));

    const r = numerator / denominator;
    return r;
  }
  r2(x: number[], y: number[]): number {
    return this.correlationCoefficient(x, y) ** 2
  }
}