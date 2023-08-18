// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxt/image", // This seems to be completely broken with pnpm generate
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-icon",
  ],
  ssr: false, // Disable Server Side rendering to make pnpm generate work
  content: {
    documentDriven: true,
    experimental: {
      clientDB: true,
      stripQueryParameters: false,
    },
  },
  colorMode: {
    classSuffix: "",
  },
  experimental: {
    payloadExtraction: false,
  },
});
