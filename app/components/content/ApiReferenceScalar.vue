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

<style></style>
