
export type CategoriaReceta =
  | 'Entrantes'
  | 'Platos principales'
  | 'Postres'
  | 'Bebidas';

export interface Receta {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: CategoriaReceta;
  fechaPublicacion: string;
  tiempoPreparacion: number;
  destacada?: boolean;
}
