<script setup>
import { computed } from "vue";
import { useAppStore } from "../store/store";
import Title from "./Title.vue";
import TerminalNavbar from "./TerminalNavbar.vue";
import FooterSvg from "../assets/svg/footer.svg"

const appStore = useAppStore();
const terminalMode = computed(() => appStore.terminalMode);
</script>

<template>
  <section class="section about" id="about">
    <div class="oval oval-right">
      <svg viewBox="0 0 437 749" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_489_2145)">
          <path
            d="M555.772 547.638C674.33 539.645 751.729 495.093 827.041 391.492C979.611 181.614 88.8472 115.416 212.792 345.843C290.941 491.132 404.335 557.848 555.772 547.638Z"
            fill="#F8AE28"
            fill-opacity="0.15"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_489_2145"
            x="0.917969"
            y="0.92749"
            width="1043.76"
            height="747.727"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="100"
              result="effect1_foregroundBlur_489_2145"
            />
          </filter>
        </defs>
      </svg>
    </div>
    <Title
      class="title"
      text=">Get to Know Us!_👋"
      number="1"
      color="#f8ae28"
    ></Title>
    <p class="description" :style="terminalMode ? { color: 'white', maxWidth: '95%' } : {}">
      >The Open Minds club is a student scientific club at the USTHB created in 2009. Its primary goal is to foster a spirit of sharing and collaboration among students and to promote the Open Source philosophy. 
    </p>
    <TerminalNavbar v-if="terminalMode" color="#f8ae28" />
    <br>
  </section>
</template>

<style scoped>
.about {
  background-image: url(../assets/images/members.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
}

@media (max-width: 700px) {
  .about {
    background-position: center 80%;
  }

}
</style>
