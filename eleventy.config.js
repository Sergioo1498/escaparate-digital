import { HtmlBasePlugin } from "@11ty/eleventy";

const PALABRAS_POR_MINUTO = 200;

export default function (eleventyConfig) {
  // Reescribe las URL absolutas del HTML con el prefijo del repositorio
  // (necesario porque GitHub Pages sirve el sitio en /nombre-del-repo/).
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Entradas ordenadas de la más reciente a la más antigua.
  // Cada una recibe además su número de orden (la primera publicada es la n.º 1).
  eleventyConfig.addCollection("entradas", (api) => {
    const entradas = api.getFilteredByGlob("src/posts/*.md").sort((a, b) => b.date - a.date);
    entradas.forEach((entrada, i) => {
      entrada.data.numero = String(entradas.length - i).padStart(2, "0");
    });
    return entradas;
  });

  // Lista de etiquetas únicas con sus entradas, ordenada alfabéticamente.
  eleventyConfig.addCollection("etiquetas", (api) => {
    const mapa = new Map();
    for (const entrada of api.getFilteredByGlob("src/posts/*.md")) {
      for (const etiqueta of entrada.data.etiquetas ?? []) {
        if (!mapa.has(etiqueta)) mapa.set(etiqueta, []);
        mapa.get(etiqueta).push(entrada);
      }
    }
    return [...mapa.entries()]
      .map(([nombre, entradas]) => ({
        nombre,
        entradas: entradas.sort((a, b) => b.date - a.date),
      }))
      .sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));
  });

  eleventyConfig.addFilter("fechaLarga", (fecha) =>
    new Intl.DateTimeFormat("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(fecha)
  );

  eleventyConfig.addFilter("fechaISO", (fecha) => fecha.toISOString().slice(0, 10));

  eleventyConfig.addFilter("fechaAtom", (fecha) => fecha.toISOString());

  eleventyConfig.addFilter("minutosLectura", (html) => {
    const palabras = String(html).replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(palabras / PALABRAS_POR_MINUTO));
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    pathPrefix: process.env.PATH_PREFIX || "/",
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}
