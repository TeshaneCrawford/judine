<script lang="ts" setup>
import { withTrailingSlash } from 'ufo';
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

import type { Image } from '~/types/image';

type Gallery = {
  _path: string;
  title: string;
  description?: string;
  cover?: Image;
  images?: Image[];
};

const props = defineProps({
  path: {
    type: String,
    default: "galleries",
  },
});

const { data: _galleries } = await useAsyncData(
  "galleries",
  async () => await queryContent(withTrailingSlash(props.path)).find() as ParsedContent[]
);



const galleries = computed(() =>
  (_galleries.value as Gallery[]) || []
)

</script>

<template>
  <div
    v-if="galleries?.length"
    class="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  >
    <GalleryListItem
      v-for="(gallery, index) in galleries"
      :key="index"
      :gallery="gallery"
    />
  </div>
  <div v-else>
    <p class="">
      No galleries found.
    </p>
  </div>
</template>

<style scoped></style>
