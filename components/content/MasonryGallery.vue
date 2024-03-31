<script lang="ts" setup>

import type { Image } from '../../types/image';

interface itemPropsT {
  item: Image;
  index: number;
}

type Props = {
  images: Image[];
};

defineProps<Props>();
</script>

<template>
  <div class="not-prose">
    <FancyBox>
      <div>
        <MasonryWall
          :items="images"
          :ssr-columns="1"
          :column-width="300"
          :gap="14"
          class=""
        >
          <template #default="{ item }: itemPropsT">
            <a
              class=" overflow-hidden block dark:bg-zinc-800 bg-zinc-200"
              :href="item.src"
              data-fancybox="gallery"
              data-cropped="true"
            >
              <NuxtImg
                :src="item.src"
                alt="Some image"
                sizes="sm:90vw md:50vw lg:30vw"
                class="w-full h-full object-cover object-center"
                :width="item.width"
                :height="item.height"
                loading="lazy"
              />
            </a>
          </template>
        </MasonryWall>
      </div>
    </FancyBox>
  </div>
</template>

<style scoped></style>
