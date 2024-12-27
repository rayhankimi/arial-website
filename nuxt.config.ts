// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/main.css'],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    apiKey: process.env.API_KEY,
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:3000',
      apiSecret: process.env.API_SECRET,
    }
  }
})
