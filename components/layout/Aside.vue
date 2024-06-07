<script setup lang="ts">
  defineProps<{ isMobile: boolean }>()
  const config = useConfig()
  const path = useRoute().path

  const { navigation } = useContent()
  const { currentPathYear } = useContentDateUtils()
  const currentYearTree = computed(() => {
    return navigation.value.find(
      (dir: any) => dir.title === currentPathYear.value,
    )
  })

  // Other files (not in year format or index page) tree
  const { isPathContainsYear } = useContentDateUtils()
  const nonYearTree = computed(() => {
    return navigation.value.filter((dir: any) => !isPathContainsYear(dir._path))
  })
</script>

<template>
  <UiScrollArea
    orientation="vertical"
    class="relative h-full overflow-hidden py-6 pr-6 text-sm"
    type="hover"
  >
    <div class="space-y-4">
      <LayoutAsideYearSelector />

      <!-- Current Year Tree -->
      <ul class="space-y-3">
        <li v-for="link in currentYearTree.children" :key="link._path">
          <NuxtLink
            :to="link._path"
            class="flex items-center gap-2"
            :class="[
              !path.startsWith(link._path) &&
                'text-muted-foreground transition-colors hover:text-primary/80',
            ]"
          >
            <div
              size="16"
              class="flex rounded border p-1"
              :class="{
                'bg-primary text-primary-foreground': path.startsWith(
                  link._path,
                ),
              }"
            >
              <Icon
                :name="link.icon || 'ph:folder-notch-open-duotone'"
                class="size-5"
              />
            </div>

            <span class="font-medium">
              {{ link.title }}
            </span>
          </NuxtLink>
        </li>
      </ul>

      <!-- Non Year Tree -->
      <ul
        v-if="nonYearTree.length"
        class="space-y-3 border-t border-dashed pt-3"
      >
        <li v-for="link in nonYearTree" :key="link._path">
          <NuxtLink
            :to="link._path"
            class="flex items-center gap-2"
            :class="[
              !path.startsWith(link._path) &&
                'text-muted-foreground transition-colors hover:text-primary/80',
            ]"
          >
            <div
              size="16"
              class="flex rounded border p-1"
              :class="{
                'bg-primary text-primary-foreground': path.startsWith(
                  link._path,
                ),
              }"
            >
              <Icon
                :name="link.icon || 'ph:folder-notch-open-duotone'"
                class="size-5"
              />
            </div>

            <span class="font-medium">
              {{ link.title }}
            </span>
          </NuxtLink>
        </li>
      </ul>

      <!-- Extra Links -->
      <ul
        v-if="config.aside.extraLinks?.length"
        class="space-y-3 border-t border-dashed py-3"
      >
        <li v-for="(link, index) in config.aside.extraLinks" :key="index">
          <NuxtLink
            :to="link.to"
            :target="link.target"
            class="flex items-center gap-2"
            :class="[
              !path.startsWith(link.to) &&
                'text-muted-foreground transition-colors hover:text-primary/80',
            ]"
          >
            <div
              size="16"
              class="flex rounded border p-1"
              :class="{
                'bg-primary text-primary-foreground': path.startsWith(link.to),
              }"
            >
              <Icon
                :name="link.icon || 'ph:folder-notch-open-duotone'"
                class="size-5"
              />
            </div>

            <span class="font-medium">
              {{ link.title }}
            </span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </UiScrollArea>
</template>
