// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "nuxt-og-image",
    "nuxt-simple-robots",
    "nuxt-simple-sitemap",
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
  },
  experimental: {
    payloadExtraction: false,
  },
  site: {
    url: "https://charlotteml.github.io",
  },
});
