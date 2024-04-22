<script lang="ts" setup></script>

<template>
  <article class="min-h-dvh flex flex-col items-stretch">
    <!-- ring -->
    <!-- <div class="fixed inset-0 flex justify-center sm:px-8">
      <div class="flex w-full max-w-7xl lg:px-8">
        <div
          class="w-full bg-white ring-1 ring-zinc-200/50 dark:bg-zinc-900 dark:ring-zinc-500/20"
        />
      </div>
    </div> -->

    <!-- background -->
    <Container class="relative">
      <div class="absolute top-0 right-0">
        <NuxtImg
          src="img/bg-glow.png"
          aria-hidden="true"
          class="w-[44rem]"
          format="webp"
          width="944"
          height="586"
        />
      </div>
    </Container>

    <!-- header -->
    <NavigationNavbar />

    <!-- main -->
    <main class="judine-prose">
      <Container>
        <slot />
      </Container>
    </main>

    <!-- footer -->
    <NavigationFooter class="mt-auto" />
  </article>
</template>

<style scoped></style>
