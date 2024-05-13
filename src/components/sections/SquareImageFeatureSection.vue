<template>
  <div class="md:py-32 py-20 ">
    <div class="isolation-isolate relative">
      <div class="px-4 max-w-6xl mx-auto md:px-6 lg:px-8">
        <div class="round-10 px-10 flex-col flex-wrap justify-center items-center py-10 justify-center flex gap-10 p-10 bg-opacity-5 bg-white bg-opacity-5 max-w-5xl mx-auto md:py-20 md:gap-20 md:p-20 lg:max-w-none lg:mx-auto lg:flex-row lg:px-20 lg:pl-20 lg:pr-20">
          <img
              class="max-w-xs aspect-[1/1] shadow-md overflow-hidden object-cover rounded-lg md:max-w-6xl md:shadow-lg"
              :src="imageUrl"
              :alt="imageAlt"
          />
          <div class="flex-1 w-full">
            <h2 class="md:text-2xl text-xl text-gray-900 tracking-tighter font-bold">{{ title }}</h2>
            <p class="text-gray-900 text-lg leading-8 mt-6">
              {{ description }}
            </p>
            <ul v-if="features != null" class="text-gray-600 grid grid-cols-1 gap-y-3 gap-x-4 mt-10 md:gap-x-8 md:grid-cols-2">
              <li v-for="feature in features" :key="feature.name" class="flex gap-[0.75rem]">
                <FontAwesomeIcon :icon="feature.icon" class="flex-none w-[1.25rem] h-[1.75rem]"></FontAwesomeIcon>
                {{ feature.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import type {IconDefinition} from "@fortawesome/free-regular-svg-icons";

interface FeaturePoint {
  name: string,
  icon: IconDefinition
}

const props = defineProps({
  title: String,
  description: String,
  imageUrl: String,
  imageAlt: String,
  features: Array as () => FeaturePoint[] | null
})
</script>

<style scoped>

</style>