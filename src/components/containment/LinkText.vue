<template>
  <RouterLink
      v-if="!openExternal && !newTab"
      :to="to"
      class="text-sm font-semibold leading-6 text-gray-900"

  >
    <slot></slot>
  </RouterLink>

  <a
      v-else-if="openExternal && !newTab"
      :href="to"
      class="text-sm font-semibold leading-6 text-gray-900"
  >
    <slot></slot>
  </a>

  <a
      v-else
      :href="to"
      class="text-sm font-semibold leading-6 text-gray-900"
      target="_blank"
      rel="noopener noreferrer"
  >
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';

const props = defineProps({
  openExternal: Boolean,
  newTab: Boolean,
  to: String
})
</script>

<style scoped>

</style>