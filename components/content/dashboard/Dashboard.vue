<script setup lang="ts">
  const { getDashboardData } = useDashboard()
  const { data } = await getDashboardData()
</script>

<template>
  <div v-if="data" class="space-y-16">
    <!-- Salaries Percentile -->
    <div class="space-y-4">
      <ProseH3>Salaries Percentile</ProseH3>

      <div class="space-y-8 text-center">
        <div>
          <p class="text-4xl font-bold">{{ data.stats.median }} EGP</p>
          <p class="text-2xl text-muted-foreground">Median</p>
        </div>

        <ul
          class="grid w-full grid-cols-1 gap-3 2xs:grid-cols-2 xs:grid-cols-4"
        >
          <li class="flex flex-col gap-1">
            <span class="h-1.5 w-full rounded-full bg-muted-foreground/40" />
            <p class="font-semibold">{{ data.stats.p20Compensation }} EGP</p>
            <span class="text-muted-foreground">20TH %</span>
          </li>

          <li class="flex flex-col gap-1">
            <span class="h-1.5 w-full rounded-full bg-muted-foreground/60" />
            <p class="font-semibold">{{ data.stats.p75Compensation }} EGP</p>
            <span class="text-muted-foreground">75TH %</span>
          </li>

          <li class="flex flex-col gap-1">
            <span class="h-1.5 w-full rounded-full bg-muted-foreground" />
            <p class="font-semibold">{{ data.stats.p90Compensation }} EGP</p>
            <span class="text-muted-foreground">90TH %</span>
          </li>

          <li class="flex flex-col gap-1">
            <span class="h-1.5 w-full rounded-full bg-muted" />
            <p class="font-semibold">{{ data.stats.totalCount }}</p>
            <span class="text-muted-foreground">Participants</span>
          </li>
        </ul>

        <div
          class="flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <p class="text-start">
            You are in the lower range of salaries. 50% of the participants earn
            more than you. Try using more filters to narrow the result to
            participants with the same criteria as you 🔍
          </p>

          <UiLink
            to="/community/participate"
            class="h-9 gap-2"
            variant="outline"
          >
            <Icon name="ph:pencil-simple-duotone" class="size-5" />
            Share your salary
          </UiLink>
        </div>
      </div>
    </div>

    <!-- Salary Range Distribution  -->
    <div class="space-y-4">
      <div>
        <ProseH3>Salary Range Distribution Among Participants</ProseH3>
        <p class="text-muted-foreground">
          Identify your position in salary spectrum
        </p>
      </div>

      <ContentChartBar
        :labels="data.salaryRangeDistribution.labels"
        :series="[
          {
            name: 'Number of Participants',
            data: data.salaryRangeDistribution.count,
          },
        ]"
      />

      <Alert icon="ph:info">
        Checkout our
        <a
          href="https://lookerstudio.google.com/reporting/fc89c7a2-5dd9-4954-afc3-3ea7f3c7241a/page/DUS6C?s=qk7232SNGS4"
          target="_blank"
          class="underline"
        >
          2022 Salary Dashboard
        </a>
        and compare the market after EGP devaluation!
      </Alert>
    </div>

    <!-- Gender Salary Comparison -->
    <div class="space-y-4">
      <div>
        <ProseH3>Gender Salary Comparison</ProseH3>
        <p class="text-muted-foreground">
          Exploring Salaries disparities between genders
        </p>
      </div>

      <ContentChartLine
        :y-axis-percentage="true"
        :labels="[
          '3-6K',
          '6-9K',
          '9-12K',
          '12-15K',
          '15-20K',
          '20-25K',
          '25-30K',
          '30-35K',
          '45-40K',
          '40-45K',
          '45-50K',
          '50-60K',
          '60-70K',
          '70-100K',
          '140-160K',
        ]"
        :series="[
          {
            name: 'Male',
            data: [
              2.48, 9.92, 1.8, 12.2, 2.48, 9.92, 1.8, 12.2, 2.48, 9.92, 1.8,
              12.2, 2.48, 9.92, 1.8,
            ],
          },
          {
            name: 'Female',
            data: [
              27.4, 52.2, 1.4, 18.7, 27.4, 52.2, 1.4, 18.7, 27.4, 52.2, 1.4,
              18.7, 27.4, 52.2, 1.4,
            ],
          },
        ]"
        :options="{
          xaxis: {
            title: { text: 'Total Month Net Salary in EGP (Basic + Bonus)' },
          },
          yaxis: { title: { text: 'Percentage of Participants' } },
        }"
      />

      <Alert icon="ph:info">
        Checkout our
        <a
          href="https://ranasamir.hashnode.dev/egypts-tech-scene-unequal-pay-in-the-tech-market"
          target="_blank"
          class="underline"
        >
          2022 Unequal Pay in the Tech Market
        </a>
        report and wait for the updated one!
      </Alert>
    </div>
  </div>
</template>
