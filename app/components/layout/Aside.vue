<script setup lang="ts">
  defineProps<{ isMobile: boolean }>()
  const config = useConfig()
  const path = useRoute().path
  const { navigation } = useContent()
  const { isPathContainsYear } = useContentDateUtils()

  const { currentPathYear, isInsideYearDir, getAvailableContentYears } =
    useContentDateUtils()
  const availableContentYears = await getAvailableContentYears()
  const yearDirTree = computed(() => {
    // Show current year tree if inside year dir, otherwise show the latest available year tree
    const activeYear = isInsideYearDir.value
      ? currentPathYear.value
      : availableContentYears[0]

    return navigation.value.find((dir: any) => dir.title === activeYear)
  })

  // Other files (not in year format or index page) tree
  const nonYearDirsTree = computed(() => {
    return navigation.value.filter(
      (dir: any) => !isPathContainsYear(dir._path) && dir.children?.length,
    )
  })
  const nonYearFilesTree = computed(() => {
    return navigation.value.filter(
      (dir: any) => !isPathContainsYear(dir._path) && !dir.children,
    )
  })
</script>

<template>
  <UiScrollArea
    orientation="vertical"
    class="relative h-full overflow-hidden py-6 pr-6 text-sm"
    type="hover"
  >
    <div class="space-y-4">
      <!-- Survey -->
      <div class="space-y-3">
        <p class="font-medium">Survey</p>

        <LayoutAsideYearSelector />

        <!-- Year Dir Tree -->
        <ul v-if="yearDirTree" class="space-y-3">
          <li v-for="link in yearDirTree.children" :key="link._path">
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
      </div>

      <!-- Non Year Dir Tree -->
      <template v-if="nonYearDirsTree.length">
        <ul
          v-for="dir in nonYearDirsTree"
          :key="dir._path"
          class="space-y-3 border-t border-dashed pt-3"
        >
          <p class="font-medium">{{ dir.title }}</p>

          <li v-for="link in dir.children" :key="link._path">
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
      </template>

      <!-- Non Year Files Tree -->
      <template v-if="nonYearFilesTree.length">
        <ul class="space-y-3">
          <p class="font-medium">Other</p>

          <li v-for="link in nonYearFilesTree" :key="link._path">
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
      </template>

      <!-- Extra Links -->
      <ul
        v-if="config.aside.extraLinks?.length"
        class="space-y-3 border-t border-dashed py-3"
      >
        <p class="font-medium">Extras</p>

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
