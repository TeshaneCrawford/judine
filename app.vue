<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "flex h-full flex-col bg-zinc-100 text-zinc-700 dark:text-zinc-300 dark:bg-body-dark",
  },
  htmlAttrs: {
    lang: "en",
    class: "font-sans h-full antialiased",
  },
});
</script>

<template>
  <div class="min-h-[100dvh] overflow-x-auto relative" :class="{ 'flex flex-col md:block': $router.currentRoute.value.fullPath !== '/' }">
    <NuxtPwaManifest />
    <UNotifications />
    <NuxtLoadingIndicator />
    <NuxtPage />
  </div>
</template>
