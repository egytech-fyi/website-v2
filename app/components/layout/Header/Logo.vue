<script setup lang="ts">
  const { hideTitleInSmallScreen } = defineProps<{
    hideTitleInSmallScreen?: boolean
  }>()
  const { logo, title, showTitle } = useConfig().value.header
</script>

<template>
  <NuxtLink v-if="logo.light && logo.dark" to="/" class="flex">
    <NuxtImg :src="logo.light" class="h-7 dark:hidden" />
    <NuxtImg :src="logo.dark" class="hidden h-7 dark:block" />
    <span
      v-if="showTitle && title"
      :class="{ 'hidden sm:block': hideTitleInSmallScreen }"
      class="ml-3 self-center font-bold"
    >
      {{ title }}
    </span>
  </NuxtLink>
</template>
