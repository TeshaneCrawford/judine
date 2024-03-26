<script lang="ts" setup>
import type { Image } from '../../types/image';
const pictures = [
  '/img/stories/01.jpg',
  '/img/stories/02.jpg',
  '/img/stories/03.jpg',
]
</script>

<template>
  <div class="not-prose">
    <FancyBox>
      <div>
        <a
          v-for="(picture, index) in pictures"
          :key="index"
          :href="picture"
          data-fancybox="gallery"
          class="p-2"
        >
          <NuxtImg
            :src="picture"
            width="1600"
            height="1600"
            :alt="'Story ' + (index + 1)"
            class=""
          />
        </a>
      </div>
    </FancyBox>
  </div>
</template>

<style scoped></style>
