import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaComponent } from './media/media.component';
import { StddevComponent } from './stddev/stddev.component';

import { StddevComponent } from './stddev/stddev.component';


import { StddevComponent } from './stddev/stddev.component';
import { LinearRegressionComponent } from './linear-regression/linear-regression.component';
import { RegressionComponent } from './regression/regression.component';
import { SimpsonComponent } from './simpson/simpson.component';



@NgModule({
  declarations: [
    AppComponent,

    MediaComponent,
    StddevComponent,
    LinearRegressionComponent,
    RegressionComponent,
    SimpsonComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
