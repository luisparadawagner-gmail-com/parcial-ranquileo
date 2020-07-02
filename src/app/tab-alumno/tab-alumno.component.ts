import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Alumno} from 'src/app/clase/Alumno';
import {ComponentConsultarService} from 'src/app/servicio/consultar-alumno.service';
@Component({
  selector: 'app-tab-alumno',
  templateUrl: './tab-alumno.component.html',
  styleUrls: ['./tab-alumno.component.css']
})
export class TabAlumnoComponent implements OnInit {

  alumnoNuevo: any;
  

  displayedColumns: string[] = ['nombre', 'apellido', 'edad', 'materia','fechacursada','editar'];
  dataSource: Alumno[] = [];

  constructor(private router: Router, private componentConsultarService: ComponentConsultarService,private rutaA: ActivatedRoute) { }

  ngOnInit() {
    this.getAlumnos();
  }

  getAlumnos(){
    this.componentConsultarService.getAlumno().subscribe((personas) => {
      debugger;
      this.dataSource = personas;
      this.agregarFila()
  
    });
  }
  agregarFila(){
    debugger;
    this.alumnoNuevo = this.rutaA.snapshot.params;
    this.dataSource.push(this.alumnoNuevo)

  }
  editar(element){
    debugger;
    this.router.navigate(['/alumno-component', element])
  }
  
}
