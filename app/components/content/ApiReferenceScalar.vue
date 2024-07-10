<script setup lang="ts">
  import type { ReferenceLayoutProps } from '@scalar/api-reference'
  import { ApiReference, parse } from '@scalar/api-reference'
  import '@scalar/api-reference/style.css'

  type OpenApiSpec = ReferenceLayoutProps['parsedSpec']
  const { openAPISpecUrl } = useAppConfig()

  // Fetching the OpenAPI specification
  const openApiSpec = ref<OpenApiSpec | undefined>()
  const loading = ref(true)
  const error = ref(false)

  onMounted(async () => {
    const parsedSpec = await parse(openAPISpecUrl)
    loading.value = false

    if (!parsedSpec) return (error.value = true)
    openApiSpec.value = parsedSpec
  })
</script>

<template>
  <div v-if="loading" class="space-y-8 py-20 text-center md:py-40">
    <Icon name="Loading" class="size-20" />
    <p>Fetching OpenAPI Spec from the backend...</p>
  </div>

  <div v-else-if="error" class="space-y-8 py-20 text-center md:py-40">
    <Icon name="ph:link-break-duotone" class="size-20" />
    <p>Something went wrong. Please try again later.</p>
    <pre>{{ error }}</pre>
  </div>

  <ApiReference
    v-else
    :configuration="{ spec: { content: openApiSpec }, searchHotKey: 'd' }"
  />
</template>

<style>
  .scalar-app {
    /* Hide Scalar dark mode button in favour of our own */
    .darklight {
      display: none;
    }

    /* Matching Scalar documentation styles with ours */
    
    --scalar-background-1: hsl(var(--background));
    --scalar-background-2: hsl(var(--secondary));
    --scalar-background-3: hsl(var(--background));
    --scalar-border-color: hsl(var(--border));
    --scalar-background-accent: hsl(var(--muted));
    --scalar-color-accent: hsl(var(--muted-foreground));

    --scalar-color-1: hsl(var(--primary));
    --scalar-color-2: hsl(var(--muted-foreground));
    --scalar-color-3: hsl(var(--primary));

    --scalar-button-1: hsl(var(--secondary));
    --scalar-button-1-hover: hsl(var(--secondary) / 0.8);
    --scalar-button-1-color: hsl(var(--secondary-foreground));

    --scalar-color-green: #17803d;
    --scalar-color-red: #e10909;
    --scalar-color-yellow: #edbe20;
    --scalar-color-blue: #1763a6;
    --scalar-color-orange: #e25b09;
    --scalar-color-purple: #5c3993;
  }
</style>
