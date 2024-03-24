<script lang="ts" setup>
import { ref, onMounted, onUpdated, onUnmounted } from 'vue';

import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

const props = defineProps({
  options: {
    type: Object,
    default: () => ({
      Carousel: {
        infinite: true,
        transition: 'fade'
      },
      infobar: true,
      toolbar: true,
    })
  }
});

const container = ref(null);

onMounted(() => {
  Fancybox.bind(container.value, '[data-fancybox]', {
    ...(props.options),
  });
});

onUpdated(() => {
  Fancybox.unbind(container.value);
  Fancybox.close();
  Fancybox.bind(container.value, '[data-fancybox]', {
    ...(props.options),
  });
});

onUnmounted(() => {
  Fancybox.destroy();
});
</script>

<template>
  <div ref="container">
    <slot />
  </div>
</template>

<style scoped></style>
