import tailwindcss from "@tailwindcss/vite";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/color-mode",
    "@nuxtjs/seo",
    "@vueuse/nuxt",
    "@nuxt/content",
    "@nuxt/icon",
  ],

  app: {
    head: {
      templateParams: { separator: "|" },
      titleTemplate: "%s %separator CharmLab",
    },
  },

  ssr: true,

  content: {
    // documentDriven: true,
  },

  colorMode: { classSuffix: "", preference: "system", fallback: "light" },

  css: ["~/assets/css/main.css"],

  experimental: { payloadExtraction: false },

  site: {
    url: "https://charlotteml.github.io",
    name: "CharmLab",
    description: "Charlotte Machine Learning Lab @ UNC Charlotte",
    defaultLocale: "en",
  },

  vite: { plugins: [tailwindcss()] },

  compatibilityDate: "2025-08-26",

  nitro: {
    prerender: {
      // routes: ["/"], // FIXME: This is a regression from Nuxt@3.12.0. Follow Nuxt Content on guide to restore this.
    },
  },

  icon: {
    mode: "css",
    cssLayer: "base",
    serverBundle: { collections: ["ph"] },
  },

  devtools: { enabled: true },
});
