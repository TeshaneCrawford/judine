<script lang="ts" setup>
defineProps({
  date: {
    type: String,
    default: '',
  },
  location: {
    type: String,
    default: '',
  },
  camera: {
    type: String,
    default: '',
  },
  film: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <section class="byline">
    <NuxtLink class="project-icons">
      <li>
        <Icon name="i-ri-calendar-line" />
        {{ date }}
      </li>
      <li>
        <Icon name="i-ri-map-pin-2-line" />
        {{ location }}
      </li>
      <li>
        <Icon name="i-ri-camera-line" />
        {{ camera }}
      </li>
      <li>
        <Icon name="i-ri-film-line" />
        {{ film }}
      </li>
    </NuxtLink>
  </section>
  <div>
    <blockquote>
      {{ description }}
    </blockquote>
  </div>
</template>

<style scoped>
.project-icons li {
  font-size: 15px;
  display: inline-block;
  padding: 0 15px;
  border-right: 1px solid #999;
}

.project-icons li:last-child {
  border-right: 0;
}

.byline {
  display: flex;
  justify-content: center;
  /* margin: 20px 0; */
}

blockquote {
  color: #a5a4a4;
  font-style: italic;
  text-align: center;
  margin-bottom: 30px;
}
</style>
