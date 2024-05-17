<template>
  <Menubar class="navbar">
    <template #logo>
      <RouterLink to="/">
        <span class="sr-only">OLG Group</span>
        <img class="h-9 w-auto" alt="OLG Logo" src="@/assets/branding/LogoFullTransparent.svg"/>
      </RouterLink>
    </template>

    <template #navigation>
      <LinkButton to="/about">About</LinkButton>
      <!--      <RouterLink to="/field/management-consulting">Management Consulting</RouterLink>-->
      <!--      <RouterLink to="/it-consulting">IT Consulting</RouterLink>-->
      <!--      <RouterLink to="/software-engineering">Software Engineering</RouterLink>-->
    </template>
  </Menubar>

  <RouterView/>

  <Footer>
    <template #navigation>
      <RouterLink to="/legal/imprint">Impressum</RouterLink>
      <RouterLink to="/legal/privacy-policy">Privacy Policy</RouterLink>
    </template>
    <template #connections>
      <LinkText to="https://github.com/olg-group" open-external new-tab>
        <span class="sr-only">GitHub</span>
        <FontAwesomeIcon :icon="faGithub" class="h-8 w-8"></FontAwesomeIcon>
      </LinkText>
      <LinkText to="https://linkedin.com/company/olggroup" open-external new-tab>
        <span class="sr-only">Linkedin</span>
        <FontAwesomeIcon :icon="faLinkedin" class="h-8 w-8"></FontAwesomeIcon>
      </LinkText>
    </template>
    <template #copyright>
      © 2024 OLG Group All rights reserved
    </template>
  </Footer>
</template>

<script setup lang="ts">
import {RouterView} from 'vue-router'
import Menubar from "@/components/Menubar.vue";
import Footer from "@/components/Footer.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import LinkText from "@/components/containment/LinkText.vue";
import LinkButton from "@/components/containment/LinkButton.vue";
</script>

<style>
body {
  margin: 0;
}
</style>
