
import { Receta } from '../models/receta.model';
import { RecetaApi } from './types/receta-api.type';
import { CategoriaReceta } from '../models/receta.model';

/**
 * Comprueba si una categoría recibida de la API
 * pertenece a las categorías admitidas por CookApp.
 */
function normalizarCategoria(categoria: string): CategoriaReceta {
  const categoriaLimpia = categoria.trim().toLowerCase();

  switch (categoriaLimpia) {
    case 'entrantes':
      return 'Entrantes';

    case 'platos principales':
      return 'Platos principales';

    case 'postres':
      return 'Postres';

    case 'bebidas':
      return 'Bebidas';

    default:
      return 'Entrantes';
  }
}


export function adaptarRecetaAPI(receta: RecetaApi): Receta {
  const tiempo = Number(receta.tiempoPreparacion);

  return {
    id: Number(receta.id),
    nombre: receta.nombre.trim().toUpperCase(),
    descripcion: receta.descripcion.trim() || 'Sin descripción',
    categoria: normalizarCategoria(receta.categoria),
    fechaPublicacion: receta.fechaPublicacion.trim(),
    tiempoPreparacion: Number.isFinite(tiempo) && tiempo >= 0 ? tiempo : 0,
    destacada: receta.destacada ?? false
  };
}

/**
 * Transforma una colección de recetas de la API.
 */
export function adaptarRecetasAPI(recetas: RecetaApi[]): Receta[] {
  return recetas.map(adaptarRecetaAPI);
}
