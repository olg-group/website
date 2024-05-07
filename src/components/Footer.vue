<template>
  <footer class="bg-white">
    <div class="mx-auto max-w-5xl overflow-hidden px-8 pt-24 pb-24">
      <nav class="navigation flex justify-center flex-wrap gap-x-6 gap-y-0 mb-[-1.5rem]">
        <slot name="navigation">

        </slot>
      </nav>
      <div class="mt-10 flex gap-x-6 justify-center">
        <slot name="connections">

        </slot>
      </div>
      <p class="text-gray-500 line-height-[1.25rem] text-[0.75rem] text-center mt-10">
        <slot name="copyright">
          © 2024 Company
        </slot>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
.navigation * {
  @apply pb-[1.5rem] fill-gray-500 hover:fill-gray-500
}
</style>