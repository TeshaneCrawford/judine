<script lang="ts" setup>
const { images } = defineProps<{
  images: {
    src: string
    alt: string
  }[]
}>()
</script>

<template>
  <div class="not-prose pb-8 grid grid-cols-1 lg:grid-cols-1 gap-2 place-items-center">
    <FancyBox>
      <div class="gap-2 grid">
        <div
          v-for="(image, index) in images"
          :key="index"
          :href="image.src"
          data-fancybox="gallery"
          class=" gap-2"
        >
          <NuxtImg
            :src="image.src"
            :alt="image.alt"
            loading="lazy"
            class="object-cover"
            :width="800"
            :height="800"
          />
        </div>
      </div>
    </FancyBox>
  </div>
</template>

<style scoped></style>
