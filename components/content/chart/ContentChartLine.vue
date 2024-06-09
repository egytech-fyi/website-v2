<script setup lang="ts">
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

  const mergedOptions = computed<ApexOptions>(() => ({
    chart: { type: 'line' },
    xaxis: { categories: labels },
    ...options,
  }))
</script>

<template>
  <ContentChart :series :options="mergedOptions" />
</template>
