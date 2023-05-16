import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit{

  miFormulario: FormGroup = this._formBuilder.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required ],
    condiciones: [ false, Validators.requiredTrue ]
  });

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: true
    });
  }

}
