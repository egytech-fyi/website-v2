<script setup lang="ts">
  import type { ApexOptions } from 'apexcharts'
  const {
    series = [],
    labels = [],
    options = {},
  } = defineProps<{
    series: ApexAxisChartSeries
    labels: string[]
    options?: ApexOptions
  }>()
</script>

<template>
  <ContentChart
    :series
    :options="{
      chart: { type: 'pie' },
      labels,
      ...options,
    }"
  />
</template>
