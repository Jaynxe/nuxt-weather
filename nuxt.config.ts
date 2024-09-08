// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],

  runtimeConfig: {
    public: {
      amapApiKey: process.env.NUXT_PUBLIC_AMAP_API_KEY || "", // 高德 API Key
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  piniaPersistedstate: {
    storage: "localStorage",
  },

  css: ["/assets/css/main.css"],
  devtools: { enabled: true },
  compatibilityDate: "2024-09-07",
});
