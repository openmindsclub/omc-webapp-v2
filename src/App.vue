<script setup>
import { onMounted } from "vue";
import Title from "./components/Title.vue";

import divider from "./assets/svg/divider.svg";
import BureauSection from "./components/BureauSection.vue";
import Hero from "./components/Hero.vue";
import Navbar from "./components/Navbar.vue";
import ActivitiesSection from "./components/ActivitiesSection.vue";
import EventsSections from "./components/EventsSections.vue";
import PartnersSection from "./components/PartnersSection.vue";
import CommunitySection from "./components/CommunitySection.vue";
import TrustedBySection from "./components/TrustedBySection.vue";
import FAQSection from "./components/FAQSection.vue";
import AboutSection from "./components/AboutSection.vue";
import OpensourceSection from "./components/OpensourceSection.vue";

// observer to run the animation everytime the element is in the view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const line = entry.target.querySelector(".line");
    const circle = entry.target.querySelector(".number");

    const divider = entry.target.classList.contains("divider");
    if (divider && entry.intersectionRatio > 0) {
      entry.target?.classList.remove("hidden");
      entry.target?.classList.add("animate-divider");
    }

    if (line && entry.intersectionRatio > 0) {
      line?.classList.remove("hidden");
      line?.classList.add("animate-line");
      circle?.classList.add("animate-circle");
      circle?.classList.remove("hidden");
    }

    const activitiesSection = entry.target.classList.contains("activities");
    if (activitiesSection && entry.intersectionRatio > 0) {
      const overlay = entry.target.querySelector(".branches-overlay");
      overlay?.classList.add("animate");
      // console.log(overlay)
    }
  });
});

onMounted(() => {
  const titles = document.querySelectorAll(".title");
  titles.forEach((el) => {
    observer.observe(el);
  });

  const dividers = document.querySelectorAll(".divider");
  dividers.forEach((el) => {
    observer.observe(el);
  });

  const sections = document.querySelectorAll(".section");
  sections.forEach((el) => {
    observer.observe(el);
  });
});
</script>

<template>
  <Navbar />
  <Hero />
  <AboutSection />
  <OpensourceSection />
  <EventsSections id="events" />
  <PartnersSection />
  <ActivitiesSection id="activities" />
  <CommunitySection />
  <TrustedBySection />
  <BureauSection />
  <FAQSection id="FAQ" />

  <footer>
    Made with <span>&#10084;</span> by OMC 
  </footer>
</template>

<style scoped>
.section {
  position: relative;
  width: 100%;
  min-height: 105vh;
  overflow: hidden;
  padding: 1em 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section .content {
  width: 100%;
}
.oval {
  position: absolute;
  top: -50px;
  height: 500px;
}
.oval svg {
  height: 100%;
}
.oval-left {
  left: 0;
}
.oval-right {
  right: 0;
}

footer {
  margin-top: 50px;
  color: white;
  height: 100px;
  text-align: center;
}
footer span {
  color: red;
}
</style>
