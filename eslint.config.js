import withNuxt from './.nuxt/eslint.config.mjs'
import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'
import eslintConfigPrettier from 'eslint-config-prettier'

export default withNuxt(
  antfu(
    // Antfu
    { stylistic: false }, // Disable stylistic rules as we're using Prettier
    // Node
    { rules: { 'node/prefer-global/process': 'off' } }, // Suppress warning about `process` being undefined
    // TypeScript
    { rules: { 'ts/consistent-type-definitions': ['error', 'type'] } }, // Enforce `type` over `interface` for type definitions
    // Vue
    {
      rules: {
        'vue/attributes-order': ['error'],
        'vue/v-bind-style': [
          'error',
          'shorthand',
          { sameNameShorthand: 'always' },
        ],
      },
    },
    // Tailwind
    ...tailwind.configs['flat/recommended'],
    { rules: { 'tailwindcss/no-custom-classname': 'off' } },
    // Prettier (Should always be last)
    eslintConfigPrettier,
  ),
)
