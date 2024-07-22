<script setup lang="ts">
  const open = ref(false)
</script>

<template>
  <UiSheet v-model:open="open">
    <UiSheetTrigger as-child>
      <UiButton variant="ghost" size="icon" class="md:hidden">
        <Icon name="lucide:menu" size="18" />
      </UiButton>
    </UiSheetTrigger>

    <UiSheetContent side="right" class="pr-0">
      <LayoutHeaderLogo />
      <LayoutAside is-mobile />
    </UiSheetContent>
  </UiSheet>
</template>
