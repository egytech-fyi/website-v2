<script setup lang="ts">
  import type { HTMLAttributes } from 'vue'
  import { type ButtonVariants, buttonVariants } from '.'
  import type { NuxtLinkProps } from '#app'
  import { cn } from '~/lib/utils'

  type Props = {
    variant?: ButtonVariants['variant']
    size?: ButtonVariants['size']
    class?: HTMLAttributes['class']
    prefetch?: boolean
  } & Omit<NuxtLinkProps, 'prefetch' | 'noPrefetch'>

  const props = defineProps<Props>()
</script>

<template>
  <NuxtLink
    :class="
      cn(buttonVariants({ variant, size }), 'hover:cursor-pointer', props.class)
    "
    v-bind="$props"
  >
    <slot />
  </NuxtLink>
</template>
