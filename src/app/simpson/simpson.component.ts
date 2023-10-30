import { Component } from "@angular/core";
import { simpson } from "../common/simpson_rule";

@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css']
})
export class SimpsonComponent {
  // Define las variables
  calc2x = simpson(0, 4, 4, 0.0001, (x: number) => 2 * x);
  calcx2 = simpson(0, 1, 4, 0.0001, (x:number) => Math.pow(x, 2));
  calc1_x = simpson(1, 4, 6, 0.001, (x:number) => 1 / x);
}

