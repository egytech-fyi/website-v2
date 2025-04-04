<script setup lang="ts">
  import { defu } from 'defu'
  import type { ApexOptions } from 'apexcharts'
  const {
    labels = [],
    series = [],
    horizontal = false,
    options = {},
    stacked,
  } = defineProps<{
    labels: string[]
    series: ApexAxisChartSeries
    horizontal?: boolean
    options?: ApexOptions
    stacked?: boolean
  }>()

  const xAxisLabels = computed(() => labels)

  const mergedOptions = computed<ApexOptions>(() =>
    defu(options, {
      chart: { type: 'bar' as const, stacked },
      xaxis: { categories: xAxisLabels.value },
      plotOptions: { bar: { horizontal } },
      dataLabels: {
        formatter(val: any) {
          return val ? `${val}` : ''
        },
      },
    }),
  )
</script>

<template>
  <ContentChart :series :options="mergedOptions" />
</template>
