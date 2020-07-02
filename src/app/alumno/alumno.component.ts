import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from '../clase/Alumno';

interface Materias{
  value: string;
  viewValue : string;
}


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  materias : Materias[] =[
    {value: '0' , viewValue: 'Matematicas'},
    {value: '1', viewValue: 'Fisica'},
    {value: '2', viewValue: 'Programación web'}
  ];

 registro: any;
 alumno : Alumno;

  constructor(private fb: FormBuilder,private rutaActiva: ActivatedRoute, private router: Router) { }

  alumnoForm = this.fb.group({
    nombre: [''],
    apellido: [''],
    edad: [''],
    materia: [''],
    fechacursada :[''],

  })

  ngOnInit(): void {
    this.registro = this.rutaActiva.snapshot.params;

    if(Object.keys(this.registro).length){
      this.alumno = this.registro;

  }
  this.initForm(this.alumno);
  }
  initForm(editarPersona: Alumno){
    this.alumnoForm = this.fb.group({
      nombre: [editarPersona ? editarPersona.nombre: ''],
      apellido: [editarPersona ? editarPersona.apellido: ''],
      edad: [editarPersona ? editarPersona.edad: ''],
      materia: [editarPersona ? editarPersona.materia: ''],
      fechacursada: [editarPersona ? editarPersona.fechacursada: ''],

  
    })
  
  }


  submit(){
    this.alumnoForm.value;
    this.alumno = this.alumnoForm.value;

    this.router.navigate(['/tabalumno-component', this.alumno]);

  }
}
