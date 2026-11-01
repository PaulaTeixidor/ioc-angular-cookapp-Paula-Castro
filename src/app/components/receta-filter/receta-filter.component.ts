
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoriaReceta } from '../../models/receta.model';

@Component({
  selector: 'app-receta-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './receta-filter.component.html',
  styleUrl: './receta-filter.component.scss'
})
export class RecetaFilterComponent {
  categoriaSeleccionada = '';

  categorias: CategoriaReceta[] = [
    'Entrantes',
    'Platos principales',
    'Postres',
    'Bebidas'
  ];

  @Output() filtroCambiado = new EventEmitter<string>();

  aplicarFiltro(): void {
    this.filtroCambiado.emit(this.categoriaSeleccionada);
  }
}
