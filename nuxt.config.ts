// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  modules: ['@nuxt/eslint', 'shadcn-nuxt', '@nuxt/fonts'],

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
