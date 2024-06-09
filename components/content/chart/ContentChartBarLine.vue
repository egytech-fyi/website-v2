<script setup lang="ts">
  import { defu } from 'defu'
  import type { ApexOptions } from 'apexcharts'
  const {
    labels,
    barSeries,
    lineSeries,
    barTitle,
    lineTitle,
    barAxisLabelPrefix,
    lineAxisLabelPrefix,
    options = {},
  } = defineProps<{
    labels: string[]
    barSeries: ApexAxisChartSeries
    lineSeries: ApexAxisChartSeries[number]
    barTitle?: string
    lineTitle?: string
    barAxisLabelPrefix?: string
    lineAxisLabelPrefix?: string
    options?: ApexOptions
  }>()

  const mappedBarSeries = computed(() => {
    return barSeries.map((series) => ({ type: 'bar', ...series }))
  })

  const mergedOptions = computed<ApexOptions>(() =>
    defu(options, {
      xaxis: { categories: labels },
      yaxis: [
        {
          title: { text: barTitle ?? barSeries[0].name, offsetX: -8 },
          labels: {
            formatter: (value: number) =>
              `${+value}${barAxisLabelPrefix ?? ''}`,
          },
        },
        {
          title: { text: lineTitle ?? lineSeries.name, offsetX: 8 },
          labels: {
            formatter: (value: number) =>
              `${+value}${lineAxisLabelPrefix ?? ''}`,
          },
          opposite: true,
        },
      ],
      stroke: { width: [...Array(barSeries.length).fill(0), 4] }, // Remove stroke from bars and add to line only
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
        formatter: (value: number) => `${+value}${lineAxisLabelPrefix ?? ''}`,
      },
    }),
  )
</script>

<template>
  <ContentChart
    :series="[...mappedBarSeries, { type: 'line', ...lineSeries }]"
    :options="mergedOptions"
  />
</template>
