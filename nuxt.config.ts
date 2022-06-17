import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'GGC'
  },
  srcDir: './src',
  css: [
    'vuetify/lib/styles/main.sass'
  ],
  modules: [
    '@pinia/nuxt'
  ],
  build: {
    transpile: ['vuetify']
  }
});
