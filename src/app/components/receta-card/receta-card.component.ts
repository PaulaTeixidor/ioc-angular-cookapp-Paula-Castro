
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Receta } from '../../models/receta.model';
import { CategoriaBadgeComponent } from '../categoria-badge/categoria-badge.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-receta-card',
  standalone: true,
  imports: [CategoriaBadgeComponent, DatePipe],
  templateUrl: './receta-card.component.html',
  styleUrl: './receta-card.component.scss'
})
export class RecetaCardComponent {
  @Input({ required: true }) receta!: Receta;

  @Output() recetaSeleccionada = new EventEmitter<Receta>();

  seleccionarReceta(): void {
    this.recetaSeleccionada.emit(this.receta);
  }
}
