<script lang="ts" setup>
const socialLinks = useSiteConfig().value.socialLinks || [];
</script>

<template>
  <span class="">
    <NuxtLink
      v-for="(link, index) in socialLinks"
      :key="index"
      :to="link.to"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center justify-center text-sm hover:underline hover:underline-offset-2"
    >
      <Icon
        :name="link.logo"
        class="w-8 h-8"
      />
    </NuxtLink>
  </span>
</template>

<style scoped></style>
