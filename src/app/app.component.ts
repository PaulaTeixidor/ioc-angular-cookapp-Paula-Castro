
import { Component } from '@angular/core';
import { Receta } from './models/receta.model';
import { RECETAS_MOCK } from './data/recetas.mock';
import { RecetaListComponent } from './components/receta-list/receta-list.component';
import { RecetaFilterComponent } from './components/receta-filter/receta-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RecetaListComponent, RecetaFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  recetas: Receta[] = RECETAS_MOCK;

  categoriaSeleccionada = '';

  recetaSeleccionada: Receta | null = null;

  get recetasFiltradas(): Receta[] {
    if (!this.categoriaSeleccionada) {
      return this.recetas;
    }

    return this.recetas.filter(
      receta => receta.categoria === this.categoriaSeleccionada
    );
  }

  filtrarRecetas(categoria: string): void {
    this.categoriaSeleccionada = categoria;
    this.recetaSeleccionada = null;
  }

  seleccionarReceta(receta: Receta): void {
    this.recetaSeleccionada = receta;
  }
}
