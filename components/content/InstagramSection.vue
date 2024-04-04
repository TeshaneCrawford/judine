<script lang="ts" setup>
const socialLinks = useSiteConfig().value.socialLinks || [];

import type { InstagramData } from '~/types/instagram-post';
const { data: instaData } = useFetch<InstagramData>('/api/instagram');
</script>

<template>
  <section class="not-prose mx-0.5 mb-5">
    <h1>
      Recent Instagram Posts
    </h1>

    <div class="grid grid-cols-1 gap-4 mx-auto mt-5">
      <div class="grid grid-cols-3 gap-2">
        <InstagramPostLoading
          v-if="!instaData"
          count="9"
        />
        <InstagramPost
          v-for="post in instaData?.data.slice(0, 9)"
          :key="post.id"
          :post="post"
        />
      </div>

      <NuxtLink
        :to="socialLinks.find(item => item.title === 'Instagram')?.to!"
        class="flex items-center justify-center gap-1 font-medium transition border-transparent font-inter active:scale-95 active:border-black w-fit group"
      >
        <span class="group-hover:underline">View More on Instagram</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="w-6 h-6 ml-1 transition group-hover:translate-x-2"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
          />
        </svg>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped></style>
