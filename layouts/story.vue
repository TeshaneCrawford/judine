<script lang="ts" setup></script>

<template>
  <div>
    <!-- Background -->
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

    <div class="relative">
      <NavigationNavbar />
      <main>
        <Container>
          <div class="mt-12 lg:mt-24 judine-prose">
            <slot />
          </div>
        </Container>
      </main>
      <NavigationFooter class="mt-auto" />
    </div>
  </div>
</template>

<style scoped></style>
