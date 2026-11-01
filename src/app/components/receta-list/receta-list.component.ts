
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Receta } from '../../models/receta.model';
import { RecetaCardComponent } from '../receta-card/receta-card.component';

@Component({
  selector: 'app-receta-list',
  standalone: true,
  imports: [RecetaCardComponent],
  templateUrl: './receta-list.component.html',
  styleUrl: './receta-list.component.scss'
})
export class RecetaListComponent {
  @Input() recetas: Receta[] = [];

  @Output() recetaSeleccionada = new EventEmitter<Receta>();

  seleccionarReceta(receta: Receta): void {
    this.recetaSeleccionada.emit(receta);
  }
}
