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
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "nuxt-headlessui",
    "@nuxtjs/supabase"
  ],

  headlessui: {
    prefix: 'Headless'
},

  app: {
    head: {
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
      ],
    },
  },

  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: false,
    },
  },

  colorMode: {
    classSuffix: "",
  },

  tailwindcss: {
    cssPath: './assets/css/tailwind.css',
    configPath: './tailwind.config.cjs'
  },

  plugins: [
    '~/plugins/parallax/index.ts',
  ],

  supabase: {
    url: process.env.NUXT_SUPABASE_URL,
    key: process.env.NUXT_SUPABASE_KEY,
    redirect: false
  },

  runtimeConfig: {
    instagramToken: process.env.NUXT_INSTAGRAM_ACCESS_TOKEN,
    supabaseUrl: process.env.NUXT_SUPABASE_URL,
    supabaseKey: process.env.NUXT_SUPABASE_KEY
  }
})