<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-indigo-600">
          <slot name="title">

          </slot>
        </h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <slot name="subtitle">

          </slot>
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          <slot name="description">

          </slot>
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div v-for="feature in features" :key="feature.name" class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <FontAwesomeIcon :icon="feature.icon" class="h-6 w-6 text-white" aria-hidden="true"/>
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import type {IconDefinition} from "@fortawesome/free-regular-svg-icons";

interface FeaturePoint {
  name: string,
  description: string,
  icon: IconDefinition
}

const props = defineProps({
  imageUrl: String,
  imageAlt: String,
  features: Array as () => FeaturePoint[]
})
</script>

<style scoped>

</style>