// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  modules: ['@nuxt/eslint'],

  // Generate only Nuxt-specific rules as we're using `antfu/eslint-config` for other Vue & TS rules
  eslint: { config: { standalone: false } },
})
