<script setup lang="ts">
  import type { HTMLAttributes } from 'vue'
  import { Primitive, type PrimitiveProps } from 'radix-vue'
  import { type ButtonVariants, buttonVariants } from '.'
  import { cn } from '~/lib/utils'

  type Props = {
    variant?: ButtonVariants['variant']
    size?: ButtonVariants['size']
    class?: HTMLAttributes['class']
  } & PrimitiveProps

  const props = withDefaults(defineProps<Props>(), {
    as: 'button',
  })
</script>

<template>
  <Primitive
    :as
    :as-child
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>
