import { Component, OnInit } from '@angular/core';
import {  media } from '../media/media.component';
import {  desviacionEstandar } from '../stddev/stddev.component';
// import { formato } from '../common/calculate';

@Component({
  selector: 'app-uno-a',
  templateUrl: './uno-a.component.html',
  styleUrls: ['./uno-a.component.css']
})
export class UnoAComponent implements OnInit{

  constructor() { }

  arraydatos: number[] = []
  result = 0;
  data = ""


  ngOnInit() {
  }

  formato(text: string): number[] {
    return text.replace(/\s/g, '').split(',').map(num => +num);
  }

  media(){
    let result = 0;
    this.arraydatos = this.formato(this.data)
    result = media(this.arraydatos)
    //result = media(this.arraydatos);
    this.result = result;
  }

  stddev(){
    let result = 0;
    this.arraydatos = this.formato(this.data)
    result = desviacionEstandar(this.arraydatos)
    this.result = result;
  }


}
