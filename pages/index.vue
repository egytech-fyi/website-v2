<script setup lang="ts">
  const { page } = useContent()

  useSeoMeta({
    title: page.value?.title,
    ogTitle: page.value?.title,
    description: page.value?.description,
  })
</script>

<template>
  <div>
    <LayoutHeader />
    <div class="container px-4 py-6 md:px-8">
      <ContentRenderer :key="page._id" :value="page" />
    </div>
    <LayoutFooter />
  </div>
</template>
