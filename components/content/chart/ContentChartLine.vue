<script setup lang="ts">
  import { defu } from 'defu'
  import type { ApexOptions } from 'apexcharts'
  const {
    labels = [],
    series = [],
    options = {},
  } = defineProps<{
    labels: string[]
    series: ApexAxisChartSeries
    options?: ApexOptions
  }>()

  // @ts-expect-error todo: fix types
  const mergedOptions = computed<ApexOptions>(() =>
    defu(options, {
      chart: { type: 'line' },
      xaxis: { categories: labels },
    }),
  )
</script>

<template>
  <ContentChart :series :options="mergedOptions" />
</template>
