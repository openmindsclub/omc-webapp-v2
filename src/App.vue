<script setup>
import { onMounted } from "vue";
import Title from "./components/Title.vue";

import ovalLeft from "./assets/svg/oval-left.svg";
import ovalRight from "./assets/svg/oval-right.svg";

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
  <section class="section about">
    <Title class="title" text=">Get to Know Us!_👋" number="1"></Title>
    <p class="description">
      > welcome in omc website if u want to that aims to hilk <br />
      promote the spirit of collaboration between students, sharing
      knowledge,<br />the Free Open Source Philosophy inside and outside again
      welcome in omc website if u want to that aims to hilk promote the spirit
      of collaboration between students, sharing knowledge,the Free Open Source
      Philosophy inside and outside
    </p>
  </section>
  <section class="section">
    <div class="oval-left">
      <img :src="ovalLeft" alt="" />
    </div>
    <div class="oval-right">
      <img :src="ovalRight" alt="" />
    </div>
    <Title class="title" text=">Open Source?_🌐" number="2"></Title>
  </section>
  <section class="section">
    <Title class="title" text=">Our Events_🎬" number="3"></Title>
    <p class="description">
      > welcome in omc website if u want to that aims to hilk <br />
      promote the spirit of collaboration between students, sharing knowledge,
      <br />the Free Open Source Philosophy inside and outside again welcome in
      omc website if u want to that aims to hilk promote the spirit of
      collaboration between students, sharing knowledge,the Free Open Source
      Philosophy inside and outside
    </p>
  </section>
  <section class="section">
    <div class="oval-left">
      <img :src="ovalLeft" alt="" />
    </div>
    <Title class="title" text=">Our Partners_🤝" number="4"></Title>
    <p class="description">
      > welcome in omc website if u want to that aims to hilk <br />
      promote the spirit of collaboration between students, sharing knowledge,
      <br />the Free Open Source Philosophy inside and outside again welcome
    </p>
  </section>
  <section class="section">
    <Title class="title" text=">Our Activities_🧩" number="5"></Title>
  </section>
  <section class="section">
    <Title class="title" text=">Our Community_🕸️" number="6"></Title>
  </section>
  <section class="section">
    <Title class="title" text=">Trusted By_✅" number="7"></Title>
    <p class="description">
      > welcome in omc website if u want to that aims to hilk <br />
      promote the spirit of collaboration between students, sharing knowledge,
      <br />
      the Free Open Source Philosophy inside and outside again welcome
    </p>
  </section>
  <section class="section">
    <Title class="title" text=">FAQ_⁉️" number="8"></Title>
  </section>
</template>

<style scoped>
.section {
  position: relative;
  width: 100%;
  min-height: 105vh;
  overflow: hidden;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section .description {
  color: var(--color-grey);
  text-align: center;
  font-family: Ubuntu Mono;
  font-size: 24px;
  font-weight: 400;
}
.section.about {
  background-image: url(./assets/images/members.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
}
.oval-left,
.oval-right {
  position: absolute;
}
.oval-left {
  top: 0;
  left: 0;
  height: 346px;
}
.oval-right {
  bottom: 0;
  right: 0;
  height: 400px;
}

.hidden {
  opacity: 0;
}
.show {
  opacity: 1;
}
</style>
