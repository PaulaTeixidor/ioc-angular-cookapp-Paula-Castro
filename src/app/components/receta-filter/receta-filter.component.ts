import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CategoriaReceta } from '../../models/receta.model';

@Component({
  selector: 'app-receta-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './receta-filter.component.html',
  styleUrl: './receta-filter.component.scss'
})
export class RecetaFilterComponent {

  textoBusqueda = '';

  categoriaSeleccionada: CategoriaReceta | '' = '';

  categorias: CategoriaReceta[] = [
    'Entrantes',
    'Platos principales',
    'Postres',
    'Bebidas'
  ];

  @Output() filtrosAplicados = new EventEmitter<{
    texto: string;
    categoria: CategoriaReceta | '';
  }>();

  aplicarFiltros(): void {
    this.filtrosAplicados.emit({
      texto: this.textoBusqueda.trim(),
      categoria: this.categoriaSeleccionada
    });
  }

  restablecerFiltros(formulario: NgForm): void {
    formulario.resetForm({
      textoBusqueda: '',
      categoriaSeleccionada: ''
    });

    this.filtrosAplicados.emit({
      texto: '',
      categoria: ''
    });
  }
}
