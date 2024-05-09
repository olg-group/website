<script setup lang="ts">
import HeroSection from "@/components/sections/HeroSection.vue";
import ImageRightFeatureSection from "@/components/sections/ImageRightFeatureSection.vue";
import {faBullseye, faForwardFast, faLock, faSeedling, faStar} from "@fortawesome/free-solid-svg-icons";
import ImageLeftFeatureSection from "@/components/sections/ImageLeftFeatureSection.vue";
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

    <ImageRightFeatureSection
        title="Management Consulting"
        subtitle="Accompanying you to the goal"
        description="Our team of experienced industry experts accompanies your management in all matters of corporate management. From strategy to marketing, we support you comprehensively. Our expertise from areas such as corporate finance & investment banking or marketing is fully available to you."
        image-url="https://placehold.co/2432x1442"

        :features="[
            {name: 'Customer-centric', icon: faBullseye, description: 'We focus on your individual situation and the associated needs.'},
            {name: 'Quality', icon: faStar, description: 'We have the highest standards for the quality of our work.'},
            {name: 'Goal-oriented', icon: faForwardFast, description: 'We concentrate on results. At the core of our strategy lies effective action.'},
        ]"
    ></ImageRightFeatureSection>

    <ImageLeftFeatureSection
        title="Software Engineering"
        subtitle="Customized Software Solutions"
        description="Our Software Engineering team utilizes modern technologies to develop tailored solutions perfectly aligned with your company's requirements. We stand by your side to develop high-quality software products that streamline your business processes and propel your success."
        image-url="https://placehold.co/2432x1442"

        :features="[
            {name: 'Secure', icon: faLock,     description: 'We prioritize security throughout the development lifecycle to safeguard your data and systems against cyber threats.'},
            {name: 'Continuous Improvement',        icon: faStar,         description: 'We are committed to continuous improvement and constantly refine our processes for optimal performance.'},
            {name: 'Eco-Friendly',    icon: faSeedling,  description: 'Our software engineering approach prioritizes eco-friendly development practices to support a healthier planet.'},
        ]"
    ></ImageLeftFeatureSection>
  </main>
</template>

<style scoped>

</style>