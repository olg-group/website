<script setup lang="ts">
import HeroSection from "@/components/sections/HeroSection.vue";
import ImageRightFeatureSection from "@/components/sections/ImageRightFeatureSection.vue";
import {
  faArrowUp,
  faBullseye,
  faForwardFast,
  faLock,
  faMedal,
  faSeedling,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import ImageLeftFeatureSection from "@/components/sections/ImageLeftFeatureSection.vue";
import Centered2x2GridSection from "@/components/sections/Centered2x2GridSection.vue";
import LinkButton from "@/components/containment/LinkButton.vue";
import LinkText from "@/components/containment/LinkText.vue";
</script>

<template>
  <main>
    <HeroSection
        title="OLG Group"
        description="Empowering Your Business with Smart IT Solutions and Consulting Expertise."
    >
      <template #buttons>
<!--        <LinkButton to="/" open-external>Get in Contact</LinkButton>-->
<!--        <LinkText to="/" open-external>Learn more <span aria-hidden="true">→</span></LinkText>-->
      </template>
    </HeroSection>

    <ImageRightFeatureSection
        title="Software Engineering"
        subtitle="Customized Software Solutions"
        description="Our Software Engineering team utilizes modern technologies to develop tailored solutions perfectly aligned with your company's requirements. We stand by your side to develop high-quality software products that streamline your business processes and propel your success."
        image-url="https://placehold.co/2432x1442"

        :features="[
            {name: 'Secure', icon: faLock,     description: 'We prioritize security throughout the development lifecycle to safeguard your data and systems against cyber threats.'},
            {name: 'Continuous Improvement',        icon: faStar,         description: 'We are committed to continuous improvement and constantly refine our processes for optimal performance.'},
            {name: 'Eco-Friendly',    icon: faSeedling,  description: 'Our software engineering approach prioritizes eco-friendly development practices to support a healthier planet.'},
        ]"
    ></ImageRightFeatureSection>

    <Centered2x2GridSection
        title="Software Engineering"
        subtitle="Customized Software Solutions"
        description="Our Software Engineering team utilizes modern technologies to develop tailored solutions perfectly aligned with your company's requirements. We stand by your side to develop high-quality software products that streamline your business processes and propel your success."
        image-url="https://placehold.co/2432x1442"

        :features="[
            {name: 'Secure', icon: faLock,     description: 'We prioritize security throughout the development lifecycle to safeguard your data and systems against cyber threats.'},
            {name: 'Continuous Improvement',        icon: faStar,         description: 'We are committed to continuous improvement and constantly refine our processes for optimal performance.'},
            {name: 'Eco-Friendly',    icon: faSeedling,  description: 'Our software engineering approach prioritizes eco-friendly development practices to support a healthier planet.'},
            {name: 'Scalability',    icon: faArrowUp,  description: 'Our software solutions can easily scale with your business growth and evolve without sacrificing performance.'},
        ]"
    ></Centered2x2GridSection>

    <ImageLeftFeatureSection
        title="Management Consulting"
        subtitle="Accompanying you to the goal"
        description="Our team of experienced industry experts accompanies your management in all matters of corporate management. From strategy to marketing, we support you comprehensively. Our expertise from areas such as corporate finance & investment banking or marketing is fully available to you."
        image-url="https://placehold.co/2432x1442"

        :features="[
            {name: 'Customer-centric', icon: faBullseye, description: 'We focus on your individual situation and the associated needs.'},
            {name: 'Quality', icon: faMedal, description: 'We have the highest standards for the quality of our work.'},
            {name: 'Goal-oriented', icon: faForwardFast, description: 'We concentrate on results. At the core of our strategy lies effective action.'},
        ]"
    ></ImageLeftFeatureSection>
  </main>
</template>

<style scoped>

</style>