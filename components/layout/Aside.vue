<script setup lang="ts">
  defineProps<{ isMobile: boolean }>()

  const { navDirFromPath } = useContentHelpers()
  const { navigation } = useContent()
  const config = useConfig()

  const tree = computed(() => {
    const route = useRoute()
    const path = route.path.split('/')
    if (config.value.aside.useLevel) {
      const leveledPath = path.splice(0, 2).join('/')

      const dir = navDirFromPath(leveledPath, navigation.value)
      return dir ?? []
    }

    return navigation.value
  })

  const path = useRoute().path
</script>

<template>
  <UiScrollArea
    orientation="vertical"
    class="relative h-full overflow-hidden py-6 pr-6 text-sm"
    type="hover"
  >
    <div class="space-y-4">
      <LayoutAsideYearSelector />

      <ul class="space-y-3">
        <li v-for="(link, index) in tree" :key="index">
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

      <template v-if="config.aside.extraLinks?.length">
        <div class="flex w-full border-t border-dashed" />

        <ul class="space-y-3">
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
                  'bg-primary text-primary-foreground': path.startsWith(
                    link.to,
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
    </div>
  </UiScrollArea>
</template>
