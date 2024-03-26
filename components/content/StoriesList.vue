<script lang="ts" setup>
import { withTrailingSlash } from 'ufo';
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

import type { Image } from '../../types/image';

type Story = {
  _path: string;
  title: string;
  description?: string;
  cover?: Image;
  date?: string;
  tags?: string[];
};

const props = defineProps({
  path: {
    type: String,
    default: "stories",
  },
});

const { data: _stories } = await useAsyncData(
  "stories",
  async () =>
    await queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find() as ParsedContent[]
);

const stories = computed(() => (_stories.value as Story []) || []);
</script>

<template>
  <div
    v-if="stories?.length"
    class="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
  >
    <StoriesListItem
      v-for="story in stories"
      :key="story._path"
      :story="story"
    />
  </div>
  <div v-else>
    <p class="">
      No Stories found.
    </p>
  </div>
</template>

<style scoped></style>
