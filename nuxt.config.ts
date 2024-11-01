// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    backendUrl: process.env.BACKEND_URL,
    backendKey: process.env.BACKEND_KEY,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "nuxt-svgo",
    "@nuxt/icon",
  ],
  googleFonts: {
    families: {
      Manrope: "200..800",
      "Dela Gothic One": true,
    },
  },
  tailwindcss: {
    exposeConfig: true,
  },
});