<script setup>
import { onMounted } from "vue";
import Title from "./components/Title.vue";

// observer to run the animation everytime the title is in the view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("animate");
      entry.target.classList.remove("hidden");
    } else {
      entry.target.classList.remove("animate");
      entry.target.classList.add("hidden");
    }
  });
});

onMounted(() => {
  const titles = document.querySelectorAll(".title");
  titles.forEach((el) => {
    observer.observe(el);
  });
});
</script>

<template>
  <section class="section">
    <Title class="title" text=">Get to Know Us!_👋" number="1"></Title>
  </section>
  <section class="section">
    <Title class="title" text=">Open Source?_🌐" number="2"></Title>
  </section>
  <section class="section">
    <Title class="title" text=">Our Events_🎬" number="3"></Title>
  </section>
  <section class="section">
    <Title class="title" text=">Our Partners_🤝" number="4"></Title>
  </section>
  <section class="section">
    <Title class="title" text=">Our Activities_🧩" number="5"></Title>
  </section>
  <section class="section">
    <Title class="title" text=">Our Community_🕸️" number="6"></Title>
  </section>
  <section class="section">
    <Title class="title" text=">Trusted By_✅" number="7"></Title>
  </section>
  <section class="section">
    <Title class="title" text=">FAQ_⁉️" number="8"></Title>
  </section>
</template>

<style scoped>
.section {
  width: 100%;
  min-height: 105vh;
  overflow: hidden;
}

.hidden {
  opacity: 0;
}
.show {
  opacity: 1;
}
</style>
