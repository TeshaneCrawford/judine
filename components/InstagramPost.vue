<script lang="ts" setup>
import type { DetailedInstagramPost } from '~/types/instagram-post';
import { MediaType } from '~/types/instagram-post';

const props = defineProps({
  post: {
    type: Object as PropType<DetailedInstagramPost>,
    required: true,
  },
});

const previewURL = computed(() =>
  props.post.media_type === MediaType.Video
    ? props.post.thumbnail_url!
    : props.post.media_url
);
</script>

<template>
  <NuxtLink
    :to="post.permalink"
    target="_blank"
    rel="noopener noreferrer"
    class="not-prose w-full aspect-square relative group"
  >
    <div class="absolute hidden inset-0 bg-gradient-to-t from-black to-black/30 p-5 lg:group-hover:flex">
      <div class="text-white text-sm line-clamp-2 mt-auto">
        {{ post.caption }}
      </div>
    </div>

    <Icon
      v-if="post.media_type !== MediaType.Image"
      :title="post.media_type.replace('_', ' ').toLowerCase()"
      class="absolute right-1 top-1 sm:right-2 sm:top-2 hover:bg-black/50 p-1 sm:p-2 rounded-full"
      name="i-ri-play-fill"
    >
      <component
        :is="
          post.media_type === MediaType.Video
            ? 'i-ri-play-fill'
            : 'i-ri-gallery-fill'"
        v-if="post.media_type === MediaType.Video"
        class="text-white drop-shadow-md"
      />
      <component
        :is="
          post.media_type === MediaType.CarouselAlbum
            ? 'i-ri-gallery-fill'
            : 'i-ri-play-fill'"
        v-else-if="post.media_type === MediaType.CarouselAlbum"
        class="text-white drop-shadow-md"
      />
    </Icon>

    <NuxtImg
      :src="previewURL"
      width="300"
      height="300"
      :alt="post.caption || ''"
      class="object-cover h-full w-full"
    />
  </NuxtLink>
</template>

<style scoped></style>
