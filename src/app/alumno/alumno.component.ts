import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

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




  constructor(private fb: FormBuilder) { }

  alumnoForm = this.fb.group({
    nombre: [''],
    apellido: [''],
    edad: [''],
    materia: [''],
    fechacursada :[''],

  })

  ngOnInit(): void {
  }

  submit(){
    this.alumnoForm.value;
    
  }
}
