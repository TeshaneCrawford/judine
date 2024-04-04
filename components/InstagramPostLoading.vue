<script lang="ts" setup>
const count = ref(12);
</script>

<template>
  <div
    v-for="item in count"
    :key="item"
    :style="{ animationDelay: `calc(${item} * 200ms)` }"
    class="aspect-square bg-neutral-300 dark:bg-neutral-700 animate-pulse"
  />
</template>

<style scoped></style>
