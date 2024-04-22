import { pwa } from './config/pwa'
import { appDescription } from './utils/appData'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
    shim: false,
    strict: true
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    "@vueuse/nuxt",
    "nuxt-headlessui",
    "@nuxtjs/supabase",
    '@nuxthub/core',
    "nuxt-auth-utils",
    "@vite-pwa/nuxt",
    "@nuxt/fonts",
    "@nuxt/ui",
    "@nuxt/eslint"],

    headlessui: {
      prefix: 'Headless'
    },

    hub: {
      blob: true
    },

    app: {
      head: {
        viewport: 'width=device-width,initial-scale=1',
        link: [
          {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
          },
          {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
          },
          {
            href: "https://fonts.googleapis.com/css2?Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,400;0,600;0,700;1,400&display=swap",
            rel: "stylesheet",
          },
          { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
          { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
          { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        ],
        meta: [
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'description', content: appDescription },
          { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
          { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
          { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
        ],
      },
    },

    pwa,

    content: {
      documentDriven: true,
      markdown: {
        anchorLinks: false,
      },
    },

    supabase: {
      url: process.env.NUXT_SUPABASE_URL,
      key: process.env.NUXT_SUPABASE_KEY,
      redirect: false
    },

    runtimeConfig: {
      // instagramToken: process.env.NUXT_INSTAGRAM_ACCESS_TOKEN,
      supabaseUrl: process.env.NUXT_SUPABASE_URL,
      supabaseKey: process.env.NUXT_SUPABASE_KEY
    },

    ui: {
      icons: {}
    },

    plugins: [
      '~/plugins/parallax/index.ts'
    ],

    experimental: {
      viewTransition: true,
    }
})