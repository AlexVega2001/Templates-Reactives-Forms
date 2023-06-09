import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss']
})
export class DinamicosComponent {

  miFormulario: FormGroup = this._formBuilder.group({
    nombre    : [ , [Validators.required, Validators.minLength(3)] ],
    favoritos : this._formBuilder.array( [
      ['Reggae', Validators.required], 
      ['Rock', Validators.required]
    ], Validators.required ) 
  });

  nuevoFavorito: FormControl = this._formBuilder.control('', Validators.required);

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(
    private _formBuilder: FormBuilder
  ) {}

  campoNoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors &&
           this.miFormulario.controls[campo].touched;
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) {
      return;
    }

    // this.favoritosArr.push(new FormControl( this.nuevoFavorito.value, Validators.required ));
    this.favoritosArr.push(this._formBuilder.control( this.nuevoFavorito.value, Validators.required ));
    this.nuevoFavorito.reset();
  }

  eliminarFavorito(index: number) {
    this.favoritosArr.removeAt(index);
    console.log(index);
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
    }
    console.log(this.miFormulario.value);
  }


}
