import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UnoAComponent } from './uno-a/uno-a.component';
import { TresAComponent } from './tres-a/tres-a.component';
import { CincoAComponent } from './cinco-a/cinco-a.component';

const routes: Routes = [{ path: 'root', component: AppComponent},
{ path: 'menu', component: MenuComponent },
{ path: 'uno-a', component: UnoAComponent },
{ path: 'tres-a', component: TresAComponent },
{ path: 'cinco-a', component: CincoAComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
