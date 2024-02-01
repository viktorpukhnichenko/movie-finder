// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'MovieFinder'
    }
  },
  runtimeConfig: {
    public: {
      omdbApiBase: process.env.NUXT_PUBLIC_OMDB_API_BASE_URL,
      omdbApiSecret: process.env.NUXT_OMDB_API_SECRET
    }
  },
  plugins:[ '~/plugins/api'],
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", '@element-plus/nuxt', '@pinia/nuxt'],
  css: ['~/assets/css/style.css'],
  elementPlus: {
    importStyle: 'scss',
  },
})