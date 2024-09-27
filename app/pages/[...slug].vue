<script setup lang="ts">
  const { page } = useContent()
  const isWidePage = computed(() => page.value?.wide ?? false)
  const config = useConfig()

  useSeoMeta({
    title: page.value?.title,
    ogTitle: page.value?.title,
    description: page.value?.description,
  })
</script>

<template>
  <div class="min-h-screen border-b">
    <div
      class="container flex-1 items-start px-4 md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 md:px-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10"
    >
      <aside
        class="fixed top-[102px] z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto md:sticky md:block lg:top-[60px]"
      >
        <LayoutAside :is-mobile="false" />
      </aside>

      <main
        class="relative py-6"
        :class="{
          'lg:grid lg:grid-cols-[1fr_200px] lg:gap-10 lg:py-8':
            config.toc.enable && !isWidePage,
        }"
      >
        <div class="mx-auto w-full min-w-0">
          <LayoutBreadcrumb
            v-if="page?.body && config.main.breadCrumb"
            class="mb-4"
          />

          <div v-if="config.main.showTitle" class="mb-6 space-y-2">
            <ProseH1>
              {{ page?.title }}
            </ProseH1>
            <p class="text-lg text-muted-foreground">
              {{ page?.description }}
            </p>
          </div>

          <Alert
            v-if="!page?.body || page?.body?.children?.length === 0"
            title="Empty Page"
            icon="lucide:circle-x"
          >
            Start writing in
            <ProseCodeInline>content/{{ page?._file }}</ProseCodeInline>
            to see this page taking shape.
          </Alert>

          <ContentRenderer
            v-else
            :key="page._id"
            :value="page"
            class="docs-content"
          />

          <LayoutPrevNext />
        </div>
        <div v-if="config.toc.enable" class="hidden text-sm lg:block">
          <div class="sticky top-[90px] h-[calc(100vh-3.5rem)] overflow-hidden">
            <LayoutDashboardFilters
              v-if="page.dashboard?.enable"
              :is-small="false"
            />
            <LayoutToc v-else :is-small="false" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
