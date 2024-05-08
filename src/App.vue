<template>
  <Menubar>
    <template #logo>
      <RouterLink to="/">
        <span class="sr-only">OLG Group</span>
        <img class="h-9 w-auto" src="/Logo.png" alt="" />
      </RouterLink>
    </template>

    <template #navigation>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/business-consulting">Business Consulting</RouterLink>
      <RouterLink to="/it-consulting">IT Consulting</RouterLink>
      <RouterLink to="/software-engineering">Software Engineering</RouterLink>
    </template>
  </Menubar>

  <RouterView />

  <Footer>
    <template #navigation>
      <RouterLink to="/impressum">Impressum</RouterLink>
      <RouterLink to="/datenschutzerklärung">Datenschutzerklärung</RouterLink>
    </template>
    <template #connections>
      <a href="https://github.com/olg-group" target="_blank" rel="noopener noreferrer">
        <span class="sr-only">GitHub</span>
        <FontAwesomeIcon :icon="faGithub" class="h-8 w-8"></FontAwesomeIcon>
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <span class="sr-only">Linkedin</span>
        <FontAwesomeIcon :icon="faLinkedin" class="h-8 w-8"></FontAwesomeIcon>
      </a>
    </template>
    <template #copyright>
      © 2024 OLG Group All rights reserved
    </template>
  </Footer>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menubar from "@/components/Menubar.vue";
import Footer from "@/components/Footer.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
</script>

<style>
body {
  margin: 0;
}
</style>
