<script lang="ts" setup>
import type { PropType } from 'vue';
import type { Image } from '../../types/image';

type Story = {
  _path: string;
  title: string;
  subtitle?: string;
  info?: string;
  description?: string;
  cover?: Image;
  date?: string;
  tags?: string[];
};

defineProps({
  story: {
    type: Object as PropType<Story>,
    required: true,
    validator: (value: Story) =>{
      if (value?._path && value?.title) {
        return true;
      }
      return false;
    }
  },
});
</script>

<template>
  <NuxtLink
    :to="story._path"
    class="group"
  >
    <div
      class="card rounded-lg sm:aspect-[3/2] md:aspect-square lg:aspect-[2/3] dark:bg-zinc-800"
    >
      <NuxtImg
        :src="story.cover?.src || 'img/placeholder.jpg'"
        :alt="story.cover?.alt || story.title"
        :width="story.cover?.width || 2"
        :height="story.cover?.height || 3"
        class="h-full w-full object-cover object-center group-hover:opacity-75"
        sizes="sm:100vw md:50vw lg:30vw"
        loading="lazy"
        placeholder
      />
      <div
        class="card-body absolute rounded-lg w-[100%] h-[100%] top-0 -right-full backdrop-blur-sm bg-white/30 p-8 flex flex-col text-slate-50 justify-center"
      >
        <h3>{{ story.title }}</h3>
        <p
          v-if="story.subtitle"
          class="text-sm"
        >
          {{ story.subtitle }}
        </p>
        <p
          v-if="story.info"
          class="text-lg my-10"
        >
          {{ story.info }}
        </p>
        <p
          v-if="story.date"
          class="mt-1 text-sm italic dark:text-zinc-500"
        >
          {{ useFormatDate(story.date) }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.card {
  @apply relative overflow-hidden;
}
.card-body {
  transition: 2s;
}
.card:hover .card-body {
  @apply right-0;
}
</style>
