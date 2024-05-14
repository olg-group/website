<template>
  <div class="px-6 py-12 max-w-3xl mx-auto mt-[2.5rem] text-base leading-7 text-gray-700 lg:px-8 divide-y divide-dashed gap-y-20 flex flex-col">
    <PrivacyPolicyEN></PrivacyPolicyEN>
    <PrivacyPolicyDE></PrivacyPolicyDE>
  </div>
</template>

<script setup lang="ts">
import PrivacyPolicyDE from "@/views/legal/PrivacyPolicy-DE.md";
import PrivacyPolicyEN from "@/views/legal/PrivacyPolicy-EN.md";
</script>

<style scoped>

</style>