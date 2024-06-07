<script setup lang="ts">
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

  const mergedOptions = computed<ApexOptions>(() => ({
    chart: { type: 'bar' },
    xaxis: { categories: labels },
    ...(horizontal && { plotOptions: { bar: { horizontal: true } } }),
    ...options,
  }))
</script>

<template>
  <ContentChart :series :options="mergedOptions" />
</template>
