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

  const xAxisLabels = computed(() => labels)

  // @ts-expect-error todo: fix types
  const mergedOptions = computed<ApexOptions>(() =>
    defu(options, {
      chart: { type: 'line' },
      xaxis: { categories: xAxisLabels.value },
    }),
  )
</script>

<template>
  <ContentChart :series :options="mergedOptions" />
</template>
