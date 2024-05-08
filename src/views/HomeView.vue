<script setup lang="ts">
import HeroSection from "@/components/sections/HeroSection.vue";
</script>

<template>
  <main>
    <HeroSection>
      <template #title>OLG Group</template>
      <template #description>Empowering Your Business with Smart IT Solutions and Consulting Expertise.</template>
      <template #buttons>
        <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Get in Contact
        </a>
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
          Learn more <span aria-hidden="true">→</span>
        </a>
      </template>
    </HeroSection>


    <img src="/favicon.svg">
    <h1>Home</h1>
  </main>
</template>

<style scoped>

</style>