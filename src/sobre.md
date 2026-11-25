---
layout: layouts/pagina.njk
title: Sobre el blog
description: Quién escribe Escaparate digital, de qué trata y cómo está hecho.
permalink: /sobre/
---

## De qué va

*Escaparate digital* reúne apuntes sobre el auge de los negocios online. Cada entrada intenta responder a una pregunta concreta apoyándose en fuentes que se puedan comprobar: estadísticas oficiales, informes públicos y textos legales. Al final de las entradas que usan datos están los enlaces a los documentos originales.

## Quién lo escribe

Me llamo Sergio González Truchado y estudio el Grado en Ingeniería Informática en la Universidad Internacional de La Rioja (UNIR). El blog nació como actividad de la asignatura Desarrollo de Aplicaciones en Red, cuyo objetivo era levantar un sitio web desde cero con HTML y CSS.

## Cómo está hecho

Es un sitio estático: no hay base de datos ni código de servidor. Las páginas se generan una sola vez y se sirven tal cual.

- **Generador:** [Eleventy](https://www.11ty.dev/). Las entradas se escriben en Markdown y las plantillas, en Nunjucks.
- **Diseño:** HTML semántico y una única hoja de estilos escrita a mano, sin frameworks. La maquetación usa Flexbox y Grid, y los colores se adaptan al modo claro u oscuro del dispositivo.
- **Imágenes:** las portadas, los esquemas y los gráficos son ilustraciones propias en formato SVG. Los gráficos se han dibujado a partir de los datos de las fuentes citadas.
- **Publicación:** el código está en GitHub y cada cambio se compila y se publica en GitHub Pages de forma automática.
- **Privacidad:** el sitio no usa cookies ni carga recursos de terceros.

El código fuente completo se puede consultar en el [repositorio del proyecto](https://github.com/Sergioo1498/escaparate-digital).

## Cómo moverse por el blog

- En **[Inicio](/)** aparece la última entrada y, debajo, las anteriores.
- El **[Archivo](/archivo/)** las lista todas por fecha.
- Las **[Etiquetas](/etiquetas/)** las agrupan por tema.
- Al final de cada entrada hay enlaces a la anterior y a la siguiente.
- Quien use un lector de feeds puede suscribirse por **[RSS](/feed.xml)**.
