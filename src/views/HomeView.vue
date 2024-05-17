<script setup lang="ts">
import HeroSection from "@/components/sections/HeroSection.vue";
import ImageRightFeatureSection from "@/components/sections/ImageRightFeatureSection.vue";
import {
  faArrowUp,
  faBullseye, faCloud,
  faForwardFast, faHandshakeAngle, faHeadset,
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
    <HeroSection>
      <template #title>OLG Group</template>
      <template #description>Empowering Your Business with Smart IT Solutions and Consulting Expertise.</template>
      <template #buttons>
<!--        <LinkButton to="/" open-external>Get in Contact</LinkButton>-->
<!--        <LinkText to="/" open-external>Learn more <span aria-hidden="true">→</span></LinkText>-->
      </template>
    </HeroSection>

    <ImageRightFeatureSection
        image-url="https://placehold.co/2432x1442"

        :features="[
            {name: 'Proactive Support', icon: faHeadset, description: 'Our approach to IT management prevents issues before they arise, keeping your operations running smoothly.'},
            {name: 'Cutting-Edge Technology', icon: faCloud, description: 'We leverage the latest technologies to enhance your IT infrastructure, ensuring that your business stays ahead of the competition.'},
            {name: 'Disaster Recovery', icon: faHandshakeAngle, description: 'We provide assistance and processes to quickly recover from IT disruptions.'},
        ]"
    >
      <template #title>IT Consulting</template>
      <template #subtitle>Guiding you into the Future</template>
      <template #description>
        Our IT Consulting services are designed to help businesses navigate the complexities of the digital landscape.
        We are here to ensure that your IT infrastructure aligns with your goals.
        From system integration to cybersecurity, our team is dedicated to delivering solutions that drive efficiency
        and innovation.
      </template>
    </ImageRightFeatureSection>

    <Centered2x2GridSection
        :features="[
            {name: 'Secure', icon: faLock, description: 'We prioritize security throughout the development lifecycle to safeguard your data and systems against cyber threats.'},
            {name: 'Continuous Improvement', icon: faStar, description: 'We are committed to continuous improvement and constantly refine our processes for optimal performance.'},
            {name: 'Eco-Friendly', icon: faSeedling,  description: 'Our software engineering approach prioritizes eco-friendly development practices to support a healthier planet.'},
            {name: 'Scalability', icon: faArrowUp,  description: 'Our software solutions can easily scale with your business growth and evolve without sacrificing performance.'},
        ]"
    >
      <template #title>Software Engineering</template>
      <template #subtitle>Customized Software Solutions</template>
      <template #description>
        Our Software Engineering team utilizes modern technologies to develop tailored solutions perfectly aligned with
        your company's requirements. We stand by your side to develop high-quality software products that streamline
        your business processes and propel your success.
      </template>
    </Centered2x2GridSection>

    <ImageLeftFeatureSection
        image-url="https://placehold.co/2432x1442"

        :features="[
            {name: 'Customer-centric', icon: faBullseye, description: 'We focus on your individual situation and the associated needs.'},
            {name: 'Quality', icon: faMedal, description: 'We have the highest standards for the quality of our work.'},
            {name: 'Goal-oriented', icon: faForwardFast, description: 'We concentrate on results. At the core of our strategy lies effective action.'},
        ]"
    >
      <template #title>Management Consulting</template>
      <template #subtitle>Accompanying you to the goal</template>
      <template #description>
        Our team of experienced industry experts accompanies your management in all matters of corporate management.
        From strategy to marketing, we support you comprehensively. Our expertise from areas such as corporate finance
        & investment banking or marketing is fully available to you.
      </template>
    </ImageLeftFeatureSection>
  </main>
</template>

<style scoped>

</style>