import { Component, OnInit } from '@angular/core';
import { LinearRegressionComponent, b0, b1, regresion } from '../linear-regression/linear-regression.component';
import { RegressionComponent, correlationCoefficient, r2 } from '../regression/regression.component';

@Component({
  selector: 'app-tres-a',
  templateUrl: './tres-a.component.html',
  styleUrls: ['./tres-a.component.css']
})
export class TresAComponent implements OnInit{

  arraydatosX: number[] = []
  arraydatosY: number[] = []
  regre = 0
  b0 = 0
  b1 = 0
  rr = 0
  correla = 0
  dataX = ""
  dataY = ""
  dataNum = 0

  constructor() { }


  ngOnInit() {
  }

  formato(text: string): number[] {
    return text.replace(/\s/g, '').split(',').map(num => +num);
  }

  regresion() {
    let regre = 0;

      this.arraydatosX = this.formato(this.dataX);
      this.arraydatosY = this.formato(this.dataY);

      regre = regresion(this.dataNum, this.arraydatosX, this.arraydatosY);
      this.setLinearValues(this.arraydatosX, this.arraydatosY);    

    this.regre = regre;
  }

  correlacion() {
    let correla = 0;
    let rr = 0;

    this.arraydatosX = this.formato(this.dataX);
    this.arraydatosY = this.formato(this.dataY);

    correla = correlationCoefficient(this.arraydatosX, this.arraydatosY);
    rr = r2(this.arraydatosX, this.arraydatosY);

    this.correla = correla;
    this.rr = rr;

  }


  private setLinearValues(x: number[], y: number[]) {
    this.b0 = b0(x, y);
    this.b1 = b1(x, y);
  }

}