<script setup lang="ts">
import HeroSection from "@/components/sections/HeroSection.vue";
import ImageRightFeatureSection from "@/components/sections/ImageRightFeatureSection.vue";
import {
  faArrowUp,
  faBullseye,
  faCloud,
  faForwardFast,
  faHandshakeAngle,
  faHeadset,
  faLock,
  faMedal,
  faSeedling,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import ImageLeftFeatureSection from "@/components/sections/ImageLeftFeatureSection.vue";
import Centered2x2GridSection from "@/components/sections/Centered2x2GridSection.vue";
import ITConsultingImage from '@/assets/images/ITConsulting.png';
import ManagementConsultingImage from '@/assets/images/ManagementConsulting.png';
import ContactSection from "@/components/sections/ContactSection.vue";
import SuccessDialog from "@/components/dialogs/SuccessDialog.vue";
import {ref} from "vue";

// handle contact form events
const contactFormShown = ref(false);
function handleContactFormSubmit(formData) {
  contactFormShown.value = true;
  console.log(formData);

  const body = {
    firstname: formData.get("first-name"),
    lastname: formData.get("last-name"),
    subject: "Contact Request",
    company: formData.get("company"),
    email: formData.get("email"),
    message: formData.get("message")
  };
  console.log(body)

  fetch("https://api.olg-group.com/contact/submit", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}
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
      :image-url="ITConsultingImage as string"

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
      :image-url="ManagementConsultingImage as string"

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

    <!-- Contact Form -->
    <SuccessDialog
      :open="contactFormShown"
      @click="this.$router.go(0)"
    >
      <template #title>Thank You</template>
      <template #description>
        We have received your contact request and will get back to you as soon as possible.
      </template>
      <template #button>Go back</template>
    </SuccessDialog>
    <ContactSection
      @submit="handleContactFormSubmit"
      add-company-field add-email-field company-optional
    >
      <template #title>Contact Us</template>
      <template #description>
        If you have any questions, feedback, or need assistance, please fill out the form below.
      </template>
      <template #button>
        Lets talk
      </template>
    </ContactSection>
  </main>
</template>

<style scoped>

</style>
