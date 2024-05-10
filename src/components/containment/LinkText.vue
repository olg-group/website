<template>
  <RouterLink
      v-if="!openExternal"
      :to="to"
      class="text-sm font-semibold leading-6 text-gray-900"
  >
    <slot></slot>
  </RouterLink>

  <a
      v-else
      :href="to"
      class="text-sm font-semibold leading-6 text-gray-900"
  >
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';

const props = defineProps({
  openExternal: Boolean,
  to: String
})
</script>

<style scoped>

</style>