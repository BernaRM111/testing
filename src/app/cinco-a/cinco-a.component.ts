import { Component, OnInit } from '@angular/core';
import { simpson, tDistribution } from '../simpson/simpson.component';

@Component({
  selector: 'app-cinco-a',
  templateUrl: './cinco-a.component.html',
  styleUrls: ['./cinco-a.component.css']
})
export class CincoAComponent {

  x0 = 0
  x1 = 0
  numseg = 0
  error = 0.0001
  dof = 0
  resultado = 0
  fx = "f(x)="
  constructor() { }

  Funcion(texto: string): ((x: number) => number) | any {
    const resultado = texto.match(/f\(x\)\s*=\s*([\s\S]+)/);

    if (resultado && resultado.length === 2) {
      const expresionMatematica = resultado[1];
      const expresionParaJS = expresionMatematica.replace(/\^/g, '**');
      const funcionGenerada: (x: number) => number = Function('x', `return ${expresionParaJS}`) as any;

      return funcionGenerada;
    }
    //return (x: number) => x;
  }

  simpson() {
    this.resultado = simpson(this.Funcion(this.fx), this.x0, this.x1, this.numseg, this.error)
  }

  t(){
    this.resultado = simpson((x: number) => tDistribution(x, this.dof), this.x0, this.x1, this.numseg, this.error);
  }

}