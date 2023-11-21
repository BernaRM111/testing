import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaComponent } from './media/media.component';
import { StddevComponent } from './stddev/stddev.component';
import { LinearRegressionComponent } from './linear-regression/linear-regression.component';
import { RegressionComponent } from './regression/regression.component';
import { SimpsonComponent } from './simpson/simpson.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { UnoAComponent } from './uno-a/uno-a.component';
import { TresAComponent } from './tres-a/tres-a.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    StddevComponent,
    LinearRegressionComponent,
    RegressionComponent,
    SimpsonComponent,
    MenuComponent,
    UnoAComponent,
    TresAComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
