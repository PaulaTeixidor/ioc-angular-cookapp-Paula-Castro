# CookApp

## Autor/a

Paula Castro

## Descripción

CookApp es una aplicación web desarrollada con Angular cuya finalidad es organizar, consultar y descubrir recetas de cocina.


## Tecnologías y versiones utilizadas

 Angular CLI: 22.2.4
 Angular: 22.2.3
 Node.js: 24.22.1
 npm: 12.2.1
 Estilos: SCSS
 Arquitectura: componentes standalone
 Routing: activado
 SSR: desactivado

## Cómo crear y ejecutar el proyecto

### Clonar el repositorio

```bash
git clone https://github.com/PaulaTeixidor/ioc-angular-cookapp-Paula-Castro.git
```

### Acceder a la carpeta del proyecto

```bash
cd ioc-angular-cookapp-Paula-Castro
```

### Instalar las dependencias

```bash
npm install
```

### Cambiar a la rama de trabajo de la EAC2

```bash
git switch ra2-components
```

### Ejecutar la aplicación en modo desarrollo

```bash
npx ng serve
```

Abrir la siguiente dirección en el navegador:

http://localhost:4200

## Estructura del proyecto

La aplicación está organizada en las siguientes carpetas:
`components`: componentes reutilizables de la aplicación.
 `models`: modelos e interfaces TypeScript.
 `data`: datos simulados de las recetas.
 `services`: carpeta destinada a los servicios.
 `pages`: carpeta destinada a las páginas de la aplicación.

## Componentes creados

 RecetaFilterComponent:permite buscar recetas por nombre y filtrar por categoría. Incluye validaciones del formulario y la opción de restablecer los filtros.
 RecetaListComponent: muestra el listado de recetas y gestiona la comunicación con las tarjetas.
 RecetaCardComponent: muestra la información de cada receta y permite seleccionarla.
 CategoriaBadgeComponent: muestra  la categoría de cada receta.

## Funcionalidades implementadas

Modelo TypeScript para representar las recetas.
 Datos simulados con un mínimo de diez recetas.
Listado de recetas mediante componentes reutilizables.
 Búsqueda de recetas por nombre.
 Filtrado por categoría.
 Contador de resultados encontrados.
 Mensaje cuando no se encuentran recetas.
 Selección de una receta para consultar su detalle.
 Formateo de fechas mediante `DatePipe`.
 Validación de campos del formulario.
 Comunicación entre componentes mediante `@Input` y `@Output`.
Control de flujo mediante `@if`, `@else` y `@for`.

## Accesibilidad y diseño responsive

Se han incorporado mejoras de accesibilidad y adaptación a diferentes tamaños de pantalla:

 Enlace para saltar directamente al contenido principal.
 Indicador de foco visible para botones, enlaces y campos de formulario mediante `:focus-visible`.
 Etiquetas `label` asociadas correctamente a los campos mediante `for` e `id`.Uso de `aria-live`, `role="status"` y `role="alert"` para comunicar resultados y errores.
 Diseño responsive mediante CSS Media Queries.
 Punto de ruptura de 600 píxeles para adaptar la interfaz a dispositivos móviles.

## Estado de las actividades

### EAC1 - Configuración inicial

 Proyecto Angular inicializado.
 Routing activado.
 Estilos SCSS configurados.
 Proyecto standalone.
 Estructura inicial de carpetas creada.
 Página principal personalizada.
 Tarjeta con los datos básicos del proyecto.
 Nota adicional implementada mediante un elemento `aside`.
 Texto obligatorio `Projecte base llest` incorporado.
 Aplicación ejecutada en modo desarrollo.
 Funcionamiento del *hot reload* comprobado.

### EAC2 - Componentes y funcionalidades

 Modelo y datos simulados de recetas creados.
 Componentes de recetas implementados.
 Filtros de búsqueda y categoría incorporados.
 Comunicación entre componentes mediante `@Input` y `@Output`.
 Control de flujo y visualización del detalle implementados.
 Accesibilidad revisada.
 Diseño responsive adaptado a dispositivos móviles.
 README actualizado para documentar el proyecto.

## Rama de trabajo

La rama utilizada para desarrollar la EAC2 es:

`ra2-components`

## Enlace del repositorio

https://github.com/PaulaTeixidor/ioc-angular-cookapp-Paula-Castro