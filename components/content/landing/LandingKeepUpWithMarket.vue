<script setup lang="ts">
  const { currentYear } = useContentDateUtils()
</script>

<template>
  <section
    class="flex flex-col items-center gap-8 py-16 md:flex-row [&>*]:basis-full"
  >
    <div class="space-y-4">
      <h2 class="text-2xl font-bold md:text-4xl">Keep up with the market</h2>

      <p>
        Did you know that although tech salaries have risen, they are barely
        keeping pace with the devaluation of the Egyptian pound?
      </p>

      <UILink :to="`/${currentYear}/report`" variant="secondary">
        <Icon name="ph:chart-pie-duotone" class="size-5" />
        <span class="ms-2">Read our Full Report</span>
      </UILink>
    </div>

    <ContentChartBarLine
      title="Average Engineering Salaries with 3-5 Years of Experience"
      :labels="['2017', '2021', '2022', '2024']"
      bar-axis-label-prefix="K"
      :bar-series="[
        {
          name: 'Software Engineers',
          data: [13.7, 17.3, 18.6, 53.1],
        },
      ]"
      line-axis-label-prefix=" EGP"
      :line-series="{
        name: 'USD/EGP Exchange Rate',
        data: [18, 15, 20, 48],
      }"
      width="100%"
      class="w-full"
    />
  </section>
</template>
