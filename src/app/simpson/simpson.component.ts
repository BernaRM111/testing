import { Component } from "@angular/core";
import { gamma } from "../common/simpson_rule";

@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css']
})
export class SimpsonComponent {
  // Define las variables
  calc2x = simpson((x: number) => 2 * x, 0, 4, 4, 0.0001);
  calcx2 = simpson((x: number) => x * x, 0, 1, 4, 0.0001);
  calc1_x = simpson((x: number) => 1 / x, 1, 4, 6, 0.001);
  calct9 = simpson((t: number) => tDistribution(t, 9), 0, 1.1, 10, 0.00001);
  calct10 = simpson((t: number) => tDistribution(t, 10), 0, 1.1812, 10, 0.00001);
  calct30 = simpson((t: number) => tDistribution(t, 30), 0, 2.750, 10, 0.00001);

}

export function simpson(funcion: (x: number) => number, a: number, b: number, numSegmentos: number, error: number): number {
  let simpsonPrev: number = 0;
  let simpsonActual: number = 0;
  let n = numSegmentos; //6
  let w: number = (b - a) / n; //0.5

  simpsonPrev = Number.MAX_VALUE;

  do {
    simpsonPrev = simpsonActual; //MAX_VALUE //2//1.3876984126984127 //3//1.386408498908499 
    simpsonActual = 0;

    simpsonActual += funcion(a) + funcion(b); //1 + 0.25 = 1.25    

    for (let i = 1; i < n; i += 2) {
      simpsonActual += 4 * funcion(a + i * w); //6.65952380952381 //2//12.265473415473416 //3//23.392087124209514                                        
    }

    for (let i = 2; i < n; i += 2) {
      simpsonActual += 2 * funcion(a + i * w); //8.326190476190476 //2//16.63690198690199 //3//33.27125240337479 
    }

    simpsonActual *= w / 3; //1.3876984126984127 //2//1.386408498908499 //3//1.3863021834739495
    n *= 2; //12 //2//24 //3//48
    w = (b - a) / n; //0.25 //2//0.125 //3//0.0625 
  } while (Math.abs(simpsonActual - simpsonPrev) > error); //1.3876984126984127 //2//0.0012899137899136104 //3//0.00010631543454953096 

  return simpsonActual;
}

export function tDistribution(t: number, dof: number): number {
  const numerator = gamma((dof + 1) / 2);
  const denominator = Math.sqrt(dof * Math.PI) * gamma(dof / 2);
  return (numerator / denominator) * (1 / Math.pow(1 + Math.pow(t, 2) / dof, (dof + 1) / 2));
}



