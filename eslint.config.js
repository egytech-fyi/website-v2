import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

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
  ),
)
