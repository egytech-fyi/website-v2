<script setup lang="ts">
  import type { WatchStopHandle } from 'vue'
  defineProps<{ isSmall: boolean }>()

  // Collapsible state
  const isOpen = ref(false)

  // Hiding overflow on body when collapsible are open to prevent double scrolling
  let unwatchCollapsible: WatchStopHandle
  onMounted(() => {
    unwatchCollapsible = watchEffect(() => {
      document.body.style.overflow = isOpen.value ? 'hidden' : 'auto'
    })
  })
  onUnmounted(() => {
    unwatchCollapsible()
    document.body.style.overflow = 'auto'
  })
</script>

<template>
  <UiScrollArea
    v-if="!isSmall"
    orientation="vertical"
    class="z-30 hidden h-[calc(100vh-6.5rem)] overflow-y-auto pe-4 md:block lg:block"
    type="hover"
  >
    <DashboardFilters />
  </UiScrollArea>

  <UiCollapsible
    v-else
    v-model:open="isOpen"
    class="block w-full border-b text-sm lg:hidden"
  >
    <UiCollapsibleTrigger class="flex w-full px-4 py-3 text-left font-medium">
      Filters

      <Icon
        name="ph:caret-right"
        class="ml-auto self-center transition-all"
        :class="[isOpen && 'rotate-90']"
      />
    </UiCollapsibleTrigger>

    <UiCollapsibleContent>
      <UiScrollArea
        orientation="vertical"
        class="h-[calc(100vh-6.5rem)] px-4 pb-8"
        type="hover"
      >
        <DashboardFilters />
      </UiScrollArea>
    </UiCollapsibleContent>
  </UiCollapsible>
</template>
