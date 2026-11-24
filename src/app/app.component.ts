
import { Component, OnInit, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

import { CategoriaReceta, Receta } from './models/receta.model';
import { RecetaService } from './services/receta.service';
import { RecetaListComponent } from './components/receta-list/receta-list.component';
import { RecetaFilterComponent } from './components/receta-filter/receta-filter.component';
import { RecetaFormComponent, NuevaReceta } from './components/receta-form/receta-form.component';
import { Subject, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
imports: [
  RecetaListComponent,
  RecetaFilterComponent,
  RecetaFormComponent,
  DatePipe
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  private recetaService = inject(RecetaService);

  private recargarRecetas$ = new Subject<void>();

  // Lista completa de recetas
  recetas = signal<Receta[]>([]);

  // Control de carga y errores
  cargando = signal(true);
  errorCarga = signal('');

  // Texto de búsqueda
  textoBusqueda = signal('');

  // Categoría seleccionada
  categoriaSeleccionada = signal<CategoriaReceta | ''>('');

  // Receta seleccionada
  recetaSeleccionada = signal<Receta | null>(null);

  recargarRecetas(): void {
  this.recargarRecetas$.next();
}

  // Cargar recetas desde la API al iniciar
  ngOnInit(): void {
  this.recargarRecetas$
    .pipe(
      startWith(undefined),
      switchMap(() => {
        this.cargando.set(true);
        this.errorCarga.set('');

        return this.recetaService.obtenerRecetas();
      })
    )
    .subscribe({
      next: (recetas) => {
        this.recetas.set(recetas);
        this.cargando.set(false);
      },
      error: (error) => {
        console.error('Error al cargar las recetas:', error);
        this.errorCarga.set('No se han podido cargar las recetas.');
        this.cargando.set(false);
      }
    });
}

  // Filtrar las recetas por texto y categoría
  get recetasFiltradas(): Receta[] {

    return this.recetas().filter((receta) => {

      const coincideTexto = receta.nombre
        .toLowerCase()
        .includes(this.textoBusqueda().toLowerCase());

      const coincideCategoria =
        !this.categoriaSeleccionada() ||
        receta.categoria === this.categoriaSeleccionada();

      return coincideTexto && coincideCategoria;
    });
  }

  // Recibir los filtros del componente de búsqueda
  aplicarFiltros(filtros: {
    texto: string;
    categoria: CategoriaReceta | '';
  }): void {
    this.textoBusqueda.set(filtros.texto);
    this.categoriaSeleccionada.set(filtros.categoria);
    this.recetaSeleccionada.set(null);
  }

  // Seleccionar una receta
  seleccionarReceta(receta: Receta): void {
    this.recetaSeleccionada.set(receta);
  }

  // Crear una receta nueva mediante el servicio
crearReceta(receta: NuevaReceta): void {
  this.recetaService.crearReceta(receta).subscribe({
    next: (nuevaReceta) => {
      console.log('Receta creada correctamente:', nuevaReceta);

      this.recargarRecetas();
    },
    error: (error) => {
      console.error('Error al crear la receta:', error);
      this.errorCarga.set('No se ha podido crear la receta.');
    }
  });
}
}

