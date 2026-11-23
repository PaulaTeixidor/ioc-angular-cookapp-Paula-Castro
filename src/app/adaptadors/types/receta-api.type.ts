
export interface RecetaApi {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  fechaPublicacion: string;
  tiempoPreparacion: number;
  destacada?: boolean;
}
