<script setup lang="ts">
import SimpleHeaderSection from "@/components/sections/SimpleHeaderSection.vue";
import SquareImageFeatureSection from "@/components/sections/SquareImageFeatureSection.vue";
import {
  faBullseye,
  faChartLine,
  faFlask,
  faGlobe,
  faHandshake,
  faLightbulb,
  faLock
} from "@fortawesome/free-solid-svg-icons";
import TeamSection from "@/components/sections/TeamSection.vue";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import CenteredContentSection from "@/components/sections/CenteredContentSection.vue";

import LogoFull from "@/assets/branding/LogoFull.svg";

import KevinOrtmann from "@/assets/team/kevin-ortmann.jpg";
import MalteLinke from "@/assets/team/malte-linke.jpg";
import NickGildenstern from "@/assets/team/nick-gildenstern.jpg";
</script>

<template>
  <main>
    <SimpleHeaderSection class="pt-32 pb-12 sm:pt-40 sm:pb-0">
      <template #title>About us</template>
      <template #description>Who are we? Find out more below.</template>
    </SimpleHeaderSection>

    <SquareImageFeatureSection
      :features="[
            { name: 'Innovative Solutions', icon: faFlask },
            { name: 'Continuous Improvement', icon: faChartLine },
            { name: 'Tailored Strategies for Success', icon: faBullseye },
            { name: 'Collaborative Partnership', icon: faHandshake }]"
      :logo="LogoFull as string"
      alt="OLG Group Logo"
    >
      <template #title>OLG Group</template>
      <template #description>Empowering Your Business with Smart IT Solutions and Consulting Expertise.</template>
    </SquareImageFeatureSection>

    <CenteredContentSection>
      <template #head>
        <p class="text-base font-semibold leading-7 text-indigo-600">About the OLG Group</p>
        <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Partner in IT and Management
          Consulting</h1>
        <p class="mt-6 text-xl leading-8 text-gray-700">
          Founded in 2024, OLG Group is dedicated to delivering top-tier IT and management consulting services, as well
          as innovative software solutions. We specialize in empowering small companies and startups to excel in the
          digital age.
        </p>
      </template>
      <template #body>
        <p>
          At OLG Group, we understand the unique challenges faced by small businesses and startups. Our team of experts
          provides tailored IT strategies, business process optimization, and software development solutions designed to
          drive efficiency and growth. We pride ourselves on being more than just consultants; we are partners committed
          to your success.
        </p>
        <p class="mt-6">
          Whether you're in need of strategic IT advice, streamlined business processes, or cutting-edge software
          solutions, OLG Group has the expertise to help you navigate and thrive in today's dynamic business
          environment. Our ultimate vision is to foster a digitally empowered society where modern technologies drive
          innovation and progress.
        </p>

        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Our Goals</h2>
        <p class="mt-6">
          Our goals are centered around creating a supportive ecosystem for small businesses and startups. We believe
          that by providing targeted IT and management consulting services, we can help these enterprises unlock their
          full potential and contribute to a more innovative and prosperous digital society.
        </p>
        <ul role="list" class="mt-8 space-y-8 text-gray-600">
          <li class="flex gap-x-3">
            <FontAwesomeIcon :icon="faLightbulb" class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true"/>
            <span>
              <strong class="font-semibold text-gray-900">Drive Innovation.</strong>
              Develop and implement cutting-edge software solutions.
            </span>
          </li>
          <li class="flex gap-x-3">
            <FontAwesomeIcon :icon="faLock" class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true"/>
            <span>
              <strong class="font-semibold text-gray-900">Digital Empowerment.</strong>
              Empower businesses with advanced digital tools and strategies.
            </span>
          </li>
          <li class="flex gap-x-3">
            <FontAwesomeIcon :icon="faGlobe" class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true"/>
            <span>
              <strong class="font-semibold text-gray-900">Client Success.</strong>
              Foster a digital-powered society, leveraging modern technologies and solutions.
            </span>
          </li>
        </ul>
      </template>
    </CenteredContentSection>

    <TeamSection
      :people="[
      {
        name: 'Kevin Ortmann',
        role: 'Managing Partner',
        imageUrl: KevinOrtmann as string,
        connections: [
          { name: 'LinkedIn', icon: faLinkedin, to: 'https://www.linkedin.com/in/kevin-ortmann/' },
          { name: 'GitHub', icon: faGithub, to: 'https://github.com/KevinOrtmann' }
        ]
      },
      {
        name: 'Malte Linke',
        role: 'Managing Partner',
        imageUrl: MalteLinke as string,
        connections: [
          { name: 'LinkedIn', icon: faLinkedin, to: 'https://www.linkedin.com/in/malte-linke-b51301222/' },
          { name: 'GitHub', icon: faGithub, to: 'https://github.com/parzival-space/' }
        ]
      },
      {
        name: 'Nick Gildenstern',
        role: 'Managing Partner',
        imageUrl: NickGildenstern as string,
        connections: [
          { name: 'LinkedIn', icon: faLinkedin, to: 'https://www.linkedin.com/in/nick-gildenstern-477300222/' },
          { name: 'GitHub', icon: faGithub, to: 'https://github.com/NickGildenstern/' }
        ]
      },
    ]"
    >
      <template #title>Our Management Team</template>
      <template #description>
        With a shared commitment to innovation and excellence, our team stands at the forefront of industry
        transformation, guiding our clients towards unparalleled success in an ever-evolving world.
      </template>
    </TeamSection>
  </main>
</template>

<style scoped>

</style>
