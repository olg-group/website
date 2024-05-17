<script setup lang="ts">
import SimpleHeaderSection from "@/components/sections/SimpleHeaderSection.vue";
import SquareImageFeatureSection from "@/components/sections/SquareImageFeatureSection.vue";
import {
  faArrowUp,
  faCross,
  faFlask,
  faGlasses,
  faHeart,
  faLock,
  faRainbow,
  faServer
} from "@fortawesome/free-solid-svg-icons";
import TeamSection from "@/components/sections/TeamSection.vue";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import CenteredContentSection from "@/components/sections/CenteredContentSection.vue";

import LogoFull from "@/assets/branding/LogoFull.svg";
</script>

<template>
  <main>
    <SimpleHeaderSection class="pt-32 pb-12 sm:pt-40 sm:pb-0">
      <template #title>About us</template>
      <template #description>Who are we? Find out more blelow.</template>
    </SimpleHeaderSection>

    <SquareImageFeatureSection
        :features="[
            { name: 'Modern Solutions', icon: faFlask }, { name: 'Customer Focused', icon: faHeart },
            { name: 'Jesus Bois', icon: faCross }, { name: 'Cool', icon: faGlasses }]"
        :logo="LogoFull as string"
        alt="OLG Group Logo"
    >
      <template #title>OLG Group</template>
      <template #description>Empowering Your Business with Smart IT Solutions and Consulting Expertise.</template>
    </SquareImageFeatureSection>

    <CenteredContentSection>
      <template #head>
        <p class="text-base font-semibold leading-7 text-indigo-600">Deploy faster</p>
        <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</h1>
        <p class="mt-6 text-xl leading-8 text-gray-700">Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas.</p>
      </template>
      <template #body>
        <p>
          At The OLG Group, we specialize in providing expert IT and management consulting services, coupled with innovative software solutions.
          With a primary focus on small companies and startups, we are committed to empowering businesses like yours to thrive in today's digital landscape.
          Whether you're seeking guidance on IT strategies, business process optimization, or software development, we have the expertise and resources to support you every step of the way.
          Our ultimate vision is to foster a digital-powered society, leveraging modern technologies and solutions to drive innovation and growth.
          Join us at The OLG Group, and let's embark on a journey towards a more efficient and digitally empowered future together.
        </p>
        <ul role="list" class="mt-8 space-y-8 text-gray-600">
          <li class="flex gap-x-3">
            <FontAwesomeIcon :icon="faArrowUp" class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
            <span><strong class="font-semibold text-gray-900">Push to deploy.</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</span>
          </li>
          <li class="flex gap-x-3">
            <FontAwesomeIcon :icon="faLock" class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
            <span><strong class="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</span>
          </li>
          <li class="flex gap-x-3">
            <FontAwesomeIcon :icon="faServer" class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
            <span><strong class="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</span>
          </li>
        </ul>
        <p class="mt-8">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
        <p class="mt-6">Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.</p>
      </template>
    </CenteredContentSection>

  <TeamSection
    :people="[
      {
        name: 'Kevin Ortmann',
        role: 'Managing Partner',
        imageUrl: '/src/assets/team/kevin-ortmann.jpg',
        connections: [
          { name: 'LinkedIn', icon: faLinkedin, to: 'https://www.linkedin.com/in/kevin-ortmann/' },
          { name: 'GitHub', icon: faGithub, to: 'https://github.com/KevinOrtmann' }
        ]
      },
      {
        name: 'Malte Linke',
        role: 'Managing Partner',
        imageUrl: '/src/assets/team/malte-linke.jpg',
        connections: [
          { name: 'LinkedIn', icon: faLinkedin, to: 'https://www.linkedin.com/in/malte-linke-b51301222/' },
          { name: 'GitHub', icon: faGithub, to: 'https://github.com/parzival-space/' }
        ]
      },
      {
        name: 'Nick Gildenstern',
        role: 'Managing Partner',
        imageUrl: '/src/assets/team/nick-gildenstern.jpg',
        connections: [
          { name: 'LinkedIn', icon: faLinkedin, to: 'https://www.linkedin.com/in/nick-gildenstern-477300222/' },
          { name: 'GitHub', icon: faGithub, to: 'https://github.com/NickGildenstern/' }
        ]
      },
    ]"
  >
    <template #title>Our Management Team</template>
    <template #description>Driven by our management, our team unites diverse disciplines to innovate in technology and business consulting.</template>
  </TeamSection>
  </main>
</template>

<style scoped>

</style>