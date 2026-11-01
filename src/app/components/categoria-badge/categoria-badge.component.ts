
import { Component, Input } from '@angular/core';
import { CategoriaReceta } from '../../models/receta.model';

@Component({
  selector: 'app-categoria-badge',
  standalone: true,
  imports: [],
  templateUrl: './categoria-badge.component.html',
  styleUrl: './categoria-badge.component.scss'
})
export class CategoriaBadgeComponent {
  @Input({ required: true }) categoria!: CategoriaReceta;
}
