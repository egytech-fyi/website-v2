// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['shadcn-docs-nuxt'],

  modules: [
    '@nuxt/eslint',
    'shadcn-nuxt',
    '@nuxt/fonts',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
  ],

  // Opt-in to Nuxt 4 features, remove when v4 is released
  future: { compatibilityVersion: 4 },

  shadcn: { componentDir: 'app/components/ui' },

  // SEO
  site: {
    // TODO: Set url in production to `https://egytech.fyi` when deployed
    url: process.env.NODE_ENV === 'production' ? '' : '',
    name: 'egytech.fyi',
    description: `Explore the latest trends in the Egyptian tech market, analyze salaries, and get personalized negotiation strategies based on your CV.`,
    defaultLocale: 'en',
  },

  app: {
    head: {
      // Favicon
      link: [
        {
          rel: 'icon',
          type: 'image/ico',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: '/android-chrome-192x192.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '512x512',
          href: '/android-chrome-512x512.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
      ],
      // OG Image
      meta: [
        { property: 'og:image', content: '/og-image.png' },
        { name: 'twitter:image', content: '/og-image.png' },
      ],
    },
  },

  // Generate only Nuxt-specific rules as we're using `antfu/eslint-config` for other Vue & TS rules
  eslint: { config: { standalone: false } },

  // Enable reactive props destructuring
  vue: { propsDestructure: true },

  // https://github.com/nuxt/nuxt/pull/22558
  hooks: {
    'components:extend': (components) => {
      components.forEach((component) => {
        if (component.global) {
          component.global = 'sync'
        }
      })
    },
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-07-10',
})
