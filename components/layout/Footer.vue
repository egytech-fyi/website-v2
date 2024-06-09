<script setup lang="ts">
  const currentYear = new Date().getFullYear().toString()
</script>

<template>
  <footer class="border-t py-3">
    <div
      class="container flex max-w-screen-2xl flex-col items-center justify-between gap-3 xs:flex-row"
    >
      <LayoutHeaderLogo />
      <p>© {{ currentYear }} All Rights Reserved</p>
    </div>
  </footer>
</template>
