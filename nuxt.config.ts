// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/seo",
    "nuxt-icon",
    "@vueuse/nuxt",
  ],

  app: {
    head: {
      templateParams: {
        separator: "|",
      },
      titleTemplate: "%s %separator CharmLab",
    },
  },

  ssr: true,

  content: {
    documentDriven: true,
  },

  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },

  experimental: {
    payloadExtraction: false,
  },

  site: {
    url: "https://charlotteml.github.io",
    name: "CharmLab",
    description: "Charlotte Machine Learning Lab @ UNC Charlotte",
    defaultLocale: "en",
  },

  compatibilityDate: "2024-07-18",

  nitro: {
    prerender: {
      routes: ["/"], // FIXME: This is a regression from Nuxt@3.12.0. Follow Nuxt Content on guide to restore this.
    },
  },

  devtools: {
    enabled: true,
  },
});
