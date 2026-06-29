export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@tsparticles/nuxt4', '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark'
  },
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: '/portfolio/',
    head: {
      title: 'Сергей Кириллов | Frontend-разработчик',
      meta: [
        { name: 'description', content: 'Портфолио frontend-разработчика с 3+ годами опыта. Vue3, TypeScript, Nuxt.' }
      ]
    }
  }
})
