<template>
  <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-12">
      <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <slot name="title">

          </slot>
        </h2>
        <p class="text-xl text-gray-500">
          <slot name="description">

          </slot>
        </p>
      </div>
      <ul role="list"
          class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
        <li v-for="person in people" :key="person.name">
          <div class="space-y-4">
            <div class="">
              <img class="object-cover shadow-lg rounded-lg aspect-[3/2] w-full" :src="person.imageUrl" alt=""/>
            </div>

            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h3>{{ person.name }}</h3>
                <p class="text-indigo-600">{{ person.role }}</p>
              </div>
              <ul role="list" class="flex space-x-5">
                <li v-for="connection in person.connections" :key="connection.to">
                  <a :href="connection.to" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">{{ connection.name }}</span>
                    <FontAwesomeIcon class="w-5 h-5" :icon="connection.icon"></FontAwesomeIcon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import type {IconDefinition} from "@fortawesome/free-regular-svg-icons";

interface PersonInformation {
  name: string,
  imageUrl: string,
  role: string,
  connections: Connection[]
}

interface Connection {
  name: string,
  icon: IconDefinition,
  to: string,
}

const props = defineProps({
  title: String,
  description: String,
  people: Array as () => PersonInformation[]
})
</script>

<style scoped>

</style>