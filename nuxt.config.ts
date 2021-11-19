import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  srcDir: "src/",

  publicRuntimeConfig: {
    siteName: "Nuxt3App",
    perPage: 3 
  },

  css: ["~/assets/css/style.css"]
});
