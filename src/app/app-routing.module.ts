import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AlumnoComponent} from 'src/app/alumno/alumno.component';
import {TabAlumnoComponent} from 'src/app/tab-alumno/tab-alumno.component';

const routes: Routes = [
  {path: 'alumno', component: AlumnoComponent},
  {path: 'tabalumno', component: TabAlumnoComponent},
  { path: '', redirectTo: 'alumno-component', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
