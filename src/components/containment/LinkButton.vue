<template>
  <RouterLink
      v-if="!openExternal && !newTab"
      :to="to"
      class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    <slot></slot>
  </RouterLink>

  <a
      v-else-if="openExternal && !newTab"
      :href="to"
      class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    <slot></slot>
  </a>

  <a
      v-else
      :href="to"
      class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      target="_blank"
      rel="noopener noreferrer"
  >
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  openExternal: Boolean,
  newTab: Boolean,
  to: String
})
</script>

<style scoped>

</style>