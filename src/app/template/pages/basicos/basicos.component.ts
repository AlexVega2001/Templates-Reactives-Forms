import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'Lapiz',
    precio: 10,
    existencia: 10
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls['producto']?.status != 'VALID' 
            && this.miFormulario?.controls['producto']?.touched;
  }

  precioInvalido():boolean {
    return this.miFormulario?.controls['precio']?.touched
            && this.miFormulario?.controls['precio']?.value < 0;
  }

  guardar() {
    // console.log(this.miFormulario);
    console.log('Guardado Correctamente');
    this.miFormulario.resetForm({
      producto: 'limpio',
      precio: 0,
      existencia: 0
    });
  }
}
