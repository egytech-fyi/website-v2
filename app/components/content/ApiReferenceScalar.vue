<script setup lang="ts">
  import { ApiReference } from '@scalar/api-reference'
  import type { ReferenceConfiguration } from '@scalar/api-reference'
  import '@scalar/api-reference/style.css'

  const { openAPISpecUrl } = useAppConfig()
  const configuration: ReferenceConfiguration = {
    spec: { url: openAPISpecUrl },
  }
</script>

<template>
  <ApiReference :configuration />
</template>

<style>
  .scalar-app {
    /* Hide Scalar dark mode button in favour for our own */
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
