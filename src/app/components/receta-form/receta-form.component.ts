
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CategoriaReceta } from '../../models/receta.model';

export interface NuevaReceta {
  nombre: string;
  descripcion: string;
  categoria: CategoriaReceta;
  fechaPublicacion: string;
  tiempoPreparacion: number;
  destacada: boolean;
}

@Component({
  selector: 'app-receta-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './receta-form.component.html',
  styleUrl: './receta-form.component.scss'
})
export class RecetaFormComponent {

  @Output() recetaCreada = new EventEmitter<NuevaReceta>();

  receta: NuevaReceta = {
    nombre: '',
    descripcion: '',
    categoria: 'Entrantes',
    fechaPublicacion: new Date().toISOString().split('T')[0],
    tiempoPreparacion: 30,
    destacada: false
  };

  categorias: CategoriaReceta[] = [
    'Entrantes',
    'Platos principales',
    'Postres',
    'Bebidas'
  ];

  enviarFormulario(): void {
    this.recetaCreada.emit({ ...this.receta });

    this.receta = {
      nombre: '',
      descripcion: '',
      categoria: 'Entrantes',
      fechaPublicacion: new Date().toISOString().split('T')[0],
      tiempoPreparacion: 30,
      destacada: false
    };
  }
}

