// Datos comunes a todas las entradas: plantilla y dirección final.
export default {
  layout: "layouts/entrada.njk",
  permalink: (data) => `/entradas/${data.page.fileSlug}/`,
};
