<script setup lang="ts">
  import VueApexCharts from 'vue3-apexcharts'
  import type { ApexOptions } from 'apexcharts'
  import { defu } from 'defu'

  defineOptions({ inheritAttrs: false }) // We bind it manually to the inner VueApexCharts component
  const {
    title,
    xAxisPercentage,
    xAxisLabelPrefix,
    yAxisPercentage,
    yAxisLabelPrefix,
    dataLabelPrefix,
    options = {},
  } = defineProps<{
    title?: string
    xAxisPercentage?: boolean
    xAxisLabelPrefix?: string
    yAxisPercentage?: boolean
    yAxisLabelPrefix?: string
    dataLabelPrefix?: string
    options?: ApexOptions
  }>()

  // Generating our color palette based on selected theme
  const colorMode = useColorMode()
  const primaryColor = computed(() => {
    return colorMode.value === 'light' ? '#020817' : '#f8fafc'
  })
  const secondaryColor = computed(() => {
    return colorMode.value === 'light' ? '#f8fafc' : '#020817'
  })
  const borderColor = computed(() => {
    return colorMode.value === 'light' ? '#e2e8f0' : '#1e293b'
  })
  const colorsPalette = computed(() => {
    return colorMode.value === 'light'
      ? [
          '#0F172A',
          '#64748b',
          '#2caffe',
          '#107e5a',
          '#544fc5',
          '#06C',
          '#4CB140',
          '#009596',
          '#5752D1',
          '#F4C145',
          '#EC7A08',
          '#7D1007',
          '#B8BBBE',
          '#004B95',
          '#38812F',
          '#005F60',
          '#3C3D99',
          '#F0AB00',
          '#C46100',
          '#470000',
          '#8A8D90',
          '#ca4c67',
        ]
      : [
          '#b1c0d0',
          '#64748b',
          '#2caffe',
          '#13b981',
          '#544fc5',
          '#8BC1F7',
          '#BDE2B9',
          '#A2D9D9',
          '#B2B0EA',
          '#F9E0A2',
          '#F4B678',
          '#C9190B',
          '#F0F0F0',
          '#519DE9',
          '#7CC674',
          '#73C5C5',
          '#8481DD',
          '#F6D173',
          '#EF9234',
          '#A30000',
          '#D2D2D2',
          '#ff6384',
        ]
  })

  // Default Options (To be merged with the passed `options` prop)
  // @ts-expect-error TODO: Fix types
  const defaultOptions = computed<ApexOptions>(() => ({
    chart: {
      fontFamily: 'Inter',
      foreColor: primaryColor.value,
      toolbar: { show: false },
    },
    colors: colorsPalette.value,
    grid: { borderColor: borderColor.value },
    yaxis: yAxisPercentage
      ? {
          forceNiceScale: false,
          min: 0,
          max: 100,
          labels: { formatter: (value: number) => `${value.toFixed(0)}%` },
        }
      : {
          labels: {
            formatter: (value: number) =>
              `${typeof value === 'number' ? +value : value}${yAxisLabelPrefix ?? ''}`,
          },
        },
    xaxis: xAxisPercentage
      ? {
          forceNiceScale: false,
          min: 0,
          max: 100,
          labels: { formatter: (value: number) => `${value.toFixed(0)}%` },
        }
      : {
          labels: {
            formatter: (value: number) =>
              `${typeof value === 'number' ? +value : value}${xAxisLabelPrefix ?? ''}`,
          },
        },
    dataLabels: {
      ...(options.chart?.type !== 'pie' && {
        formatter: (value: number) => `${+value}${dataLabelPrefix ?? ''}`,
      }),
    },
    legend: {
      position: 'bottom',
      markers: { radius: 100 },
      itemMargin: { horizontal: 8, vertical: 6 },
    },
    stroke: {
      curve: 'smooth',
      ...(options.chart?.type === 'pie' && {
        width: 1,
        colors: [secondaryColor.value],
      }),
    },
  }))

  const mergedOptions = computed(() => defu(options, defaultOptions.value))
</script>

<template>
  <ClientOnly>
    <div>
      <p v-if="title" class="text-center font-bold text-foreground">
        {{ title }}
      </p>

      <VueApexCharts
        id="egytech-apex-chart"
        height="400"
        v-bind="$attrs"
        :options="mergedOptions"
      />
    </div>

    <template #fallback>
      <div class="grid min-h-80 place-content-center">Loading Chart...</div>
    </template>
  </ClientOnly>
</template>

<style>
  #egytech-apex-chart {
    .apexcharts-yaxis-title-text {
      @apply font-semibold tracking-wide text-sm;
    }

    .apexcharts-legend-series {
      @apply gap-0.5;
    }

    .apexcharts-tooltip {
      @apply border border-border shadow-none bg-background;

      .apexcharts-tooltip-title {
        @apply bg-background border-border font-bold;
      }
    }
  }
</style>
