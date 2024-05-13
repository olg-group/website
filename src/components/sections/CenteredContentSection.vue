<template>
  <div class="px-6 lg:px-8 py-12">
    <div class="text-base leading-7 max-w-3xl mx-auto">
      <slot name="head">

      </slot>

      <div class="mt-[2.5rem] text-base leading-7 text-gray-700">
        <slot name="body">

        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faArrowUp, faLock, faServer} from "@fortawesome/free-solid-svg-icons";
</script>

<style scoped>

</style>