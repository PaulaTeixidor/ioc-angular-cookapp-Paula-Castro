
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, retry } from 'rxjs';

import { Receta } from '../models/receta.model';
import { RecetaApi } from '../adaptadors/types/receta-api.type';
import { adaptarRecetaAPI, adaptarRecetasAPI } from '../adaptadors/receta.adaptador';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  private http = inject(HttpClient);

  private apiUrl = `${API_CONFIG.baseUrl}/recetas`;

  // Obtener todas las recetas
obtenerRecetas(): Observable<Receta[]> {
  return this.http.get<RecetaApi[]>(this.apiUrl).pipe(
    retry(2),
    map(adaptarRecetasAPI)
  );
}

  // Crear una receta nueva
  crearReceta(receta: Omit<Receta, 'id'>): Observable<Receta> {

    return this.http.post<RecetaApi>(this.apiUrl, receta).pipe(
      map(adaptarRecetaAPI)
    );
  }
}


