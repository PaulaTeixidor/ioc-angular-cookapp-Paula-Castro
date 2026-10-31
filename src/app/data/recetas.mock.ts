
import type { Receta } from '../models/receta.model';

export const RECETAS_MOCK: Receta[] = [
  {
    id: 1,
    nombre: 'Tortilla de patatas',
    descripcion: 'Tortilla tradicional de patatas y huevo.',
    categoria: 'Platos principales',
    fechaPublicacion: '2026-09-01',
    tiempoPreparacion: 30,
    destacada: true
  },
  {
    id: 2,
    nombre: 'Gazpacho andaluz',
    descripcion: 'Sopa fría de tomate y verduras frescas.',
    categoria: 'Entrantes',
    fechaPublicacion: '2026-09-03',
    tiempoPreparacion: 15,
    destacada: true
  },
  {
    id: 3,
    nombre: 'Ensalada mediterránea',
    descripcion: 'Ensalada fresca con tomate, aceitunas y queso.',
    categoria: 'Entrantes',
    fechaPublicacion: '2026-09-05',
    tiempoPreparacion: 10
  },
  {
    id: 4,
    nombre: 'Lasaña de verduras',
    descripcion: 'Lasaña al horno con verduras y bechamel.',
    categoria: 'Platos principales',
    fechaPublicacion: '2026-09-08',
    tiempoPreparacion: 50,
    destacada: true
  },
  {
    id: 5,
    nombre: 'Arroz con verduras',
    descripcion: 'Arroz cocinado con verduras de temporada.',
    categoria: 'Platos principales',
    fechaPublicacion: '2026-09-10',
    tiempoPreparacion: 35
  },
  {
    id: 6,
    nombre: 'Tarta de manzana',
    descripcion: 'Tarta casera con manzana y masa crujiente.',
    categoria: 'Postres',
    fechaPublicacion: '2026-09-12',
    tiempoPreparacion: 60,
    destacada: true
  },
  {
    id: 7,
    nombre: 'Mousse de chocolate',
    descripcion: 'Postre cremoso elaborado con chocolate.',
    categoria: 'Postres',
    fechaPublicacion: '2026-09-15',
    tiempoPreparacion: 20
  },
  {
    id: 8,
    nombre: 'Limonada casera',
    descripcion: 'Bebida refrescante de limón natural.',
    categoria: 'Bebidas',
    fechaPublicacion: '2026-09-18',
    tiempoPreparacion: 10
  },
  {
    id: 9,
    nombre: 'Crema de calabaza',
    descripcion: 'Crema suave de calabaza y otras verduras.',
    categoria: 'Entrantes',
    fechaPublicacion: '2026-09-20',
    tiempoPreparacion: 40
  },
  {
    id: 10,
    nombre: 'Bizcocho de yogur',
    descripcion: 'Bizcocho esponjoso ideal para el desayuno.',
    categoria: 'Postres',
    fechaPublicacion: '2026-09-22',
    tiempoPreparacion: 45
  }
];
