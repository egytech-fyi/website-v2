<script setup lang="ts">
  import { defu } from 'defu'
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

  const slicesLabels = computed(() => labels)

  // @ts-expect-error todo: fix types
  const mergedOptions = computed<ApexOptions>(() =>
    defu(options, { chart: { type: 'pie' }, labels: slicesLabels.value }),
  )
</script>

<template>
  <ContentChart :series :options="mergedOptions" />
</template>
