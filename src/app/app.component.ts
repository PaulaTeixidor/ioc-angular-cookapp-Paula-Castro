
import { Component, OnInit, inject, signal } from '@angular/core';
import { CategoriaReceta, Receta } from './models/receta.model';
import { RecetaService } from './services/receta.service';
import { RecetaListComponent } from './components/receta-list/receta-list.component';
import { RecetaFilterComponent } from './components/receta-filter/receta-filter.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RecetaListComponent,
    RecetaFilterComponent,
    DatePipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  private recetaService = inject(RecetaService);

  // Lista completa de recetas
  recetas = signal<Receta[]>([]);

  // Control de carga y errores
  cargando = signal(true);
  errorCarga = signal('');

  // Texto que escribe el usuario
  textoBusqueda = signal('');

  // Categoría seleccionada
  categoriaSeleccionada = signal<CategoriaReceta | ''>('');

  // Receta seleccionada
  recetaSeleccionada = signal<Receta | null>(null);

  // Cargar recetas desde la API al iniciar el componente
  ngOnInit(): void {
    this.recetaService.obtenerRecetas().subscribe({
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

  // Devuelve las recetas que cumplen los filtros
  get recetasFiltradas(): Receta[] {
    return this.recetas().filter(receta => {

      const coincideTexto = receta.nombre
        .toLowerCase()
        .includes(this.textoBusqueda().toLowerCase());

      const coincideCategoria =
        !this.categoriaSeleccionada() ||
        receta.categoria === this.categoriaSeleccionada();

      return coincideTexto && coincideCategoria;
    });
  }

  // Recibe los filtros del componente de búsqueda
  aplicarFiltros(filtros: {
    texto: string;
    categoria: CategoriaReceta | '';
  }): void {
    this.textoBusqueda.set(filtros.texto);
    this.categoriaSeleccionada.set(filtros.categoria);
    this.recetaSeleccionada.set(null);
  }

  // Selecciona una receta
  seleccionarReceta(receta: Receta): void {
    this.recetaSeleccionada.set(receta);
  }
}
