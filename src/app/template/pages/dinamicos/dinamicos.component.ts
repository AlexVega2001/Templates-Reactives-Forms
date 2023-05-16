import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito []
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss']
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Alexander',
    favoritos: [
      { id: 1, nombre: 'Reggae' },
      { id: 2, nombre: 'Pop' }
    ]
  }

  guardar(miFormulario: NgForm): void {
    console.log(miFormulario.controls);
  }

  agregarFavorito() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push(nuevoFavorito);
    this.nuevoJuego = '';
  }

  eliminarFavorito(index: number): void {
    this.persona.favoritos.splice(index, 1);
  }
}
