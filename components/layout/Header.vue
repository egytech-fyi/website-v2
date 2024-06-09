<script setup lang="ts">
  const config = useConfig()
  const { page } = useContent()
</script>

<template>
  <header
    class="sticky top-0 z-40 bg-background/80 backdrop-blur-lg lg:border-b"
  >
    <div
      class="container flex h-14 max-w-screen-2xl items-center justify-between gap-2 border-b px-4 md:px-8 lg:border-none"
    >
      <LayoutHeaderLogo class="hidden flex-1 md:flex" />
      <LayoutMobileNav />
      <LayoutHeaderNav class="hidden flex-1 lg:flex" />
      <div class="flex flex-1 justify-end gap-2">
        <LayoutSearchButton v-if="!config.search?.inAside" />
        <div class="flex">
          <DarkModeToggle v-if="config.header.darkModeToggle" />
          <NuxtLink
            v-for="(link, i) in config.header.links"
            :key="i"
            :to="link?.to"
            :target="link?.target"
          >
            <UiButton variant="ghost" size="icon" class="flex gap-2">
              <Icon v-if="link?.icon" :name="link.icon" size="18" />
            </UiButton>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div v-if="config.toc.enable" class="lg:hidden">
      <LayoutDashboardFilters v-if="page.dashboard?.enable" :is-small="true" />
      <LayoutToc v-else is-small />
    </div>
  </header>
</template>
