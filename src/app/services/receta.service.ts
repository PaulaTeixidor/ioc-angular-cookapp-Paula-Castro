
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Receta } from '../models/receta.model';
import { RecetaApi } from '../adaptadors/types/receta-api.type';
import { adaptarRecetasAPI } from '../adaptadors/receta.adaptador';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  private http = inject(HttpClient);

  private apiUrl = `${API_CONFIG.baseUrl}/recetas`;

  obtenerRecetas(): Observable<Receta[]> {
    return this.http.get<RecetaApi[]>(this.apiUrl).pipe(
      map(adaptarRecetasAPI)
    );
  }
}
