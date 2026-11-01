
import { Component } from '@angular/core';
import { CategoriaReceta, Receta } from './models/receta.model';
import { RECETAS_MOCK } from './data/recetas.mock';
import { RecetaListComponent } from './components/receta-list/receta-list.component';
import { RecetaFilterComponent } from './components/receta-filter/receta-filter.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  RecetaListComponent, RecetaFilterComponent, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  // Lista completa de recetas
  recetas: Receta[] = RECETAS_MOCK;

  // Texto que escribe el usuario en el buscador
  textoBusqueda = '';

  // Categoría seleccionada en el filtro
  categoriaSeleccionada: CategoriaReceta | '' = '';

  // Receta seleccionada para mostrar su detalle
  recetaSeleccionada: Receta | null = null;

  // Devuelve las recetas que cumplen los filtros
  get recetasFiltradas(): Receta[] {
    return this.recetas.filter(receta => {

      const coincideTexto = receta.nombre
        .toLowerCase()
        .includes(this.textoBusqueda.toLowerCase());

      const coincideCategoria =
        !this.categoriaSeleccionada ||
        receta.categoria === this.categoriaSeleccionada;

      return coincideTexto && coincideCategoria;
    });
  }

  // Recibe los filtros del componente de búsqueda
  aplicarFiltros(filtros: {
    texto: string;
    categoria: CategoriaReceta | '';
  }): void {
    this.textoBusqueda = filtros.texto;
    this.categoriaSeleccionada = filtros.categoria;
    this.recetaSeleccionada = null;
  }

  // Selecciona una receta
  seleccionarReceta(receta: Receta): void {
    this.recetaSeleccionada = receta;
  }
}
