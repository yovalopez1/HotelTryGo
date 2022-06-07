import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { ReservasComponent } from './reservas/reservas.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'habitaciones',
    component:HabitacionesComponent
  },
  {
    path:'reservas',
    component:ReservasComponent
  },
  
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
