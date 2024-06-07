<script setup lang="ts">
  // Getting the available years to add them as options by querying the `/content` folder
  const { getAvailableContentYears } = useContentDateUtils()
  const availableContentYears = await getAvailableContentYears()

  // Assigning the default value from current path year and fallback to latest available content year
  const { currentPathYear } = useContentDateUtils()
  const selectedYear = ref(currentPathYear.value || availableContentYears[0])

  // Updating the path on selecting a different year to show the corresponding content
  const { currentPathWithoutYear } = useContentDateUtils()
  function navigateToSelectedYearContent() {
    const newPath = `/${selectedYear.value}/${currentPathWithoutYear.value}`
    return navigateTo(newPath)
  }
</script>

<template>
  <UISelect
    id="content-year-selector"
    v-model="selectedYear"
    @update:model-value="navigateToSelectedYearContent"
  >
    <UISelectTrigger class="[&>span]:overflow-visible">
      <UISelectValue placeholder="Select a year" :value="2" />
    </UISelectTrigger>

    <UISelectContent>
      <UISelectItem
        v-for="year in availableContentYears"
        :key="year"
        :value="year"
      >
        {{ year }}
        <span
          v-if="year === availableContentYears[0]"
          class="ms-1 rounded border bg-background p-px px-1 py-0.5 text-xs text-foreground"
        >
          Latest
        </span>
      </UISelectItem>
    </UISelectContent>
  </UISelect>
</template>
