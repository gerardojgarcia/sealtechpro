// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon', '@nuxtjs/tailwindcss', 'nuxt-aos'],

  tailwindcss: {
    configPath: '~/tailwind.config.js'
  }
})
