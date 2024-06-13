<script setup lang="ts">
  // Validating if a user selected at least one position
  const { filters } = useDashboard()

  // Getting data from the API
  const { getDashboardData } = useDashboard()
  const baseUrl = 'https://api.egytech.fyi/stats'
  const { data, error, status } = getDashboardData(baseUrl)

  // Copying url to clipboard
  const isCopied = ref(false)
  function copyUrlToClipboard() {
    isCopied.value = true
    navigator.clipboard.writeText(window.location.href)
  }
  watchEffect(() => {
    if (isCopied.value) {
      setTimeout(() => {
        isCopied.value = false
      }, 1500)
    }
  })
</script>

<template>
  <!-- Empty Filters -->
  <div
    v-if="!filters.personal.titles?.length"
    class="space-y-8 py-20 text-center md:py-40"
  >
    <Icon name="ph:shooting-star-duotone" class="size-20" />
    <p>Select at least one title to get started.</p>
  </div>

  <!-- Loading -->
  <div
    v-else-if="status === 'pending'"
    class="space-y-8 py-20 text-center md:py-40"
  >
    <Icon name="Loading" class="size-20" />
    <p>Fetching data from the backend...</p>
  </div>

  <!-- Error -->
  <div v-else-if="error" class="space-y-8 py-20 text-center md:py-40">
    <div class="!text-6xl text-red-600 dark:text-red-800">
      <Icon name="ph:link-break-duotone" class="size-20" />
      <ProseH1>Oops!</ProseH1>
    </div>

    <p>Something went wrong. Please try again later.</p>
  </div>

  <!-- Empty Results -->
  <div
    v-else-if="data?.stats.totalCount === 0"
    class="space-y-4 py-20 text-center md:py-40"
  >
    <Icon name="ph:chart-line-down-duotone" class="size-20" />

    <p>
      We have no results for the selected filters. You can be the first one!
    </p>

    <UiLink to="/community/participate" class="h-9 gap-2" variant="outline">
      <Icon name="ph:pencil-simple-duotone" class="size-5" />
      Participate in Survey
    </UiLink>
  </div>

  <!-- Results -->
  <div v-else-if="data" class="space-y-16 pt-8">
    <!-- Share results -->
    <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
      <p class="text-start">
        You can share the results of the selected filters to others! We exclude
        your salary for privacy.
      </p>

      <UiButton
        class="h-9 min-w-48 gap-2"
        variant="outline"
        @click="copyUrlToClipboard"
      >
        <Icon
          :name="isCopied ? 'ph:check-fat-duotone' : 'ph:clipboard-duotone'"
          class="size-5"
        />
        {{ isCopied ? 'Copied!' : 'Copy to Clipboard' }}
      </UiButton>
    </div>

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
            Participate in Survey
          </UiLink>
        </div>
      </div>
    </div>

    <!-- Salary Range Distribution -->
    <div class="space-y-4">
      <div>
        <ProseH3>Salary Range Distribution Among Participants</ProseH3>
        <p class="text-muted-foreground">
          Identify your position in salary spectrum
        </p>
      </div>

      <ContentChartBar
        :labels="data.allGenders.salaryRanges"
        :series="[
          {
            name: 'Number of Participants',
            data: data.allGenders.participantsCount,
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
        :labels="data.allGenders.salaryRanges"
        :series="[
          { name: 'Male', data: data.salaryGenderComparison.males },
          { name: 'Female', data: data.salaryGenderComparison.females },
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
