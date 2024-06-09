<script setup lang="ts">
  import { defu } from 'defu'
  import type { ApexOptions } from 'apexcharts'
  const {
    labels = [],
    series = [],
    horizontal,
    options = {},
  } = defineProps<{
    labels: string[]
    series: ApexAxisChartSeries
    horizontal?: boolean
    options?: ApexOptions
  }>()

  // @ts-expect-error todo: fix types
  const mergedOptions = computed<ApexOptions>(() =>
    defu(options, {
      chart: { type: 'bar' },
      xaxis: { categories: labels },
      ...(horizontal && { plotOptions: { bar: { horizontal: true } } }),
    }),
  )
</script>

<template>
  <ContentChart :series :options="mergedOptions" />
</template>
