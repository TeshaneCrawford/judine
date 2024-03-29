<script lang="ts" setup>
const footerNavigationLinks = useSiteConfig().value.footerNavigationLinks || [];
const socialLinks = useSiteConfig().value.socialLinks || [];
</script>

<template>
  <Container>
    <footer class="w-full max-w-3xl mx-auto pt-12 pb-10 sm:pt-24 sm:pb-14 px sm:px-0 text-gray-600 dark:text-gray-300">
      <div
        v-if="footerNavigationLinks.length > 0"
        class="mb-4 flex flex-wrap gap-x-6 gap-y-1"
      >
        <NuxtLink
          v-for="(link, index) in footerNavigationLinks"
          :key="index"
          :to="link.to"
          class="font-sans hover:underline hover:underline-offset-2"
        >
          {{ link.text }}
        </NuxtLink>
      </div>
      <div
        :class="['pt-6 flex flex-col gap-4 border-t border-dashed border-main',
                 { 'sm:flex-row-reverse sm:justify-between sm:items-center': socialLinks.length > 0 }]"
      >
        <div
          v-if="socialLinks"
          class="flex flex-wrap gap-x-4 gap-y-1"
        >
          <a
            v-for="(link, index) in socialLinks"
            :key="index"
            :href="link.to"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center text-sm hover:underline hover:underline-offset-2"
          >
            <Icon
              :name="link.logo"
              class="w-5 h-5"
            />

          </a>
        </div>

        <p class="text-sm">
          &copy; {{ new Date().getFullYear() }}&nbsp;
          <NuxtLink
            to="/"
            class="hover:underline hover:underline-offset-2"
          >
            {{ useSiteConfig().value.name }}
          </NuxtLink>. All rights reserved.
        </p>
      </div>
    </footer>
  </Container>
</template>

<style scoped></style>
