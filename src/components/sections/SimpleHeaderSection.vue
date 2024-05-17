<template>
  <div class="relative isolate overflow-hidden bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center">
      <div class="mx-auto max-w-2xl lg:mx-0 text-center">
        <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          <slot name="title">

          </slot>
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-900">
          <slot name="description">

          </slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>