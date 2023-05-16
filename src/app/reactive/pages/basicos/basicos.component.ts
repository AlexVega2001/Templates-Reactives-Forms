import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit{

  // miFormulario: FormGroup = new FormGroup({
  //   nombre      : new FormControl('Reggae'),
  //   precio      : new FormControl(150),
  //   existencia  : new FormControl(10)
  // });

  miFormulario: FormGroup = this._formBuilder.group({
    nombre    : [ , [Validators.required, Validators.minLength(3)] ],
    precio    : [ , [Validators.required, Validators.min(0)] ],
    existencia: [ , [Validators.required, Validators.min(0)] ]
  })

  constructor(
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
      this.miFormulario.reset({
        nombre: 'Reggae',
        precio: 10
      });
  }

  campoNoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors &&
           this.miFormulario.controls[campo].touched;
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
