// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  modules: ['@nuxt/eslint', 'shadcn-nuxt', '@nuxt/fonts', '@nuxtjs/seo'],

  // SEO
  site: {
    url: 'https://egytech.fyi/',
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
    },
  },

  // Generate only Nuxt-specific rules as we're using `antfu/eslint-config` for other Vue & TS rules
  eslint: { config: { standalone: false } },

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
})
