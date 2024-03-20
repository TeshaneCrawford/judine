<script lang="ts" setup>
// import { onBeforeUnmount, onMounted, ref } from 'vue';

const links = [
  { name: 'Home', to: '/' },
  { name: 'Gallery', to: '/gallery'},
  { name: 'Art', to: '/art'},
  { name: 'Stories', to: '/stories'},
  { name: 'Bio', to: '/bio'},
  { name: 'Contact', to: '/contact'},
] as { name: string; to: string }[];

onMounted(() => {
  window.addEventListener('scroll', onScroll)
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
});

const showHeader = ref(true);
const lastScrollPosition = ref(0);

const onScroll = () => {
  const currentScrollPosition =
    window.scrollY || document.documentElement.scrollTop;
  // Momentum scrolling on iOS can cause the scroll position to be negative
  if (currentScrollPosition < 0) return;

  // add 60px delay
  if (Math.abs(currentScrollPosition - lastScrollPosition.value) < 60) return;

  // show if scrolling up
  showHeader.value = currentScrollPosition < lastScrollPosition.value;

  lastScrollPosition.value = currentScrollPosition;
};
</script>

<template>
  <div>
    Component: navigation/Navbar
  </div>
</template>

<style scoped></style>
