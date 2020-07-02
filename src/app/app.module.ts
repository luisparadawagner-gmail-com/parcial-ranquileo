import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlumnoComponent } from './alumno/alumno.component';
import { TabAlumnoComponent } from './tab-alumno/tab-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    TabAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
