<p align="center"><img src="src/assets/img/logo.svg" alt="Escaparate digital" width="300"></p>

# Escaparate digital

Blog estático sobre el auge de los negocios online. Actividad 1 de la asignatura
**Desarrollo de Aplicaciones en Red** (Grado en Ingeniería Informática, UNIR).

- **Sitio publicado:** https://sergioo1498.github.io/escaparate-digital/
- **Autor:** Sergio González Truchado

## Tecnologías

| Parte | Herramienta |
| --- | --- |
| Generador de sitios estáticos | [Eleventy](https://www.11ty.dev/) 3 |
| Contenido | Markdown con *front matter* |
| Plantillas | Nunjucks |
| Estilos | Una hoja CSS propia (Flexbox, Grid y variables), sin frameworks |
| Tipografías | Fraunces e Instrument Sans (SIL OFL), alojadas en el sitio |
| Imágenes | Logotipo, ilustraciones y gráficos SVG propios |
| Publicación | GitHub Actions + GitHub Pages |

El sitio no usa JavaScript en el navegador, cookies ni recursos de terceros.

## Estructura

```
├── eleventy.config.js        Configuración: colecciones, filtros y rutas
├── .github/workflows/        Compilación y publicación automáticas
└── src/
    ├── _data/site.json       Datos globales (título, autor, URL)
    ├── _includes/
    │   ├── layouts/          Plantillas: base, entrada y página
    │   └── partials/         Cabecera, pie y tarjeta de entrada
    ├── assets/
    │   ├── css/styles.css    Hoja de estilos
    │   ├── fonts/            Tipografías (woff2) y sus licencias
    │   └── img/              Logotipo, portadas, esquemas y gráficos (SVG)
    ├── posts/                Entradas del blog en Markdown
    ├── index.njk             Portada
    ├── archivo.njk           Listado cronológico
    ├── etiquetas.njk         Índice de etiquetas
    ├── etiqueta.njk          Una página por etiqueta (paginación)
    ├── sobre.md              Sobre el blog
    ├── 404.njk               Página de error
    └── feed.njk              Canal Atom
```

## Uso en local

Hace falta Node.js 18 o superior.

```bash
npm install     # instala Eleventy
npm start       # servidor local en http://localhost:8080 con recarga automática
npm run build   # genera el sitio en la carpeta _site/
```

## Añadir una entrada

Basta con crear un archivo Markdown en `src/posts/`. El nombre del archivo será la
dirección de la entrada.

```yaml
---
title: "Título de la entrada"
description: "Resumen que aparece en las tarjetas y en los buscadores."
date: 2026-12-01
etiquetas: ["datos"]
portada: /assets/img/nombre-de-la-portada.svg
portadaAlt: "Descripción de la imagen de portada"
---
```

La portada, el archivo, las páginas de etiquetas, el canal RSS y los enlaces entre
entradas se actualizan solos al compilar.

## Publicación

Cada `push` a la rama `main` lanza el flujo `.github/workflows/publicar.yml`, que
compila el sitio y lo despliega en GitHub Pages. La variable `PATH_PREFIX` adapta
todas las rutas al nombre del repositorio.

## Fuentes de los datos

Los datos citados proceden del INE, la CNMC, el BOE y Goldman Sachs Research. Cada
entrada enlaza al documento original en su apartado «Fuentes».
