<script setup>
import { computed } from "vue";
import { useAppStore } from "../store/store";
import Title from "./Title.vue";

const appStore = useAppStore();
const terminalMode = computed(() => appStore.terminalMode);
</script>

<template>
  <section class="section partners">
    <div class="oval oval-left">
      <svg viewBox="0 0 476 803" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.19" filter="url(#filter0_f_489_2146)">
          <path
            d="M23.3679 601.425C126.156 591.16 193.596 538.938 259.733 418.394C393.714 174.194 -377.484 105.196 -272.068 370.815C-205.6 538.293 -107.925 614.535 23.3679 601.425Z"
            fill="url(#paint0_linear_489_2146)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_489_2146"
            x="-482.004"
            y="0.952148"
            width="957.426"
            height="801.915"
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
              result="effect1_foregroundBlur_489_2146"
            />
          </filter>
          <linearGradient
            id="paint0_linear_489_2146"
            x1="241.659"
            y1="542.263"
            x2="-380.235"
            y2="493.005"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3173BB" />
            <stop offset="1" stop-color="#007AFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <Title
      class="title"
      :text="`> ${$t('title-partners')}`"
      number="3"
      color="#3173bb"
    ></Title>
    <p class="description" :style="terminalMode ? { color: 'white' } : {}"></p>

    <div class="cards d-flex fl-j-c fl-a-c">
      <div class="card d-flex fl-a-c fl-j-c mjs">
        <img src="../assets/svg/mjs-logo.svg" alt="" srcset="" />
      </div>
      <div class="card d-flex fl-a-c fl-j-c">
        <img src="../assets/svg/usthb-logo.svg" alt="" srcset="" />
      </div>
      <div class="card d-flex fl-a-c fl-j-c">
        <img src="../assets/svg/auf-logo.svg" alt="" srcset="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.cards {
  padding-top: 50px;
  gap: 30px;
}
.card {
  width: 246px;
  height: 246px;
  border-radius: 14px;
  background-color: var(--color-black);
  padding: 40px;
}
.card.mjs {
  padding: 20px;
}

@media (max-width: 700px) {
  .cards {
    gap: 3vw;
  }
  .card {
    width: 30vw;
    height: 30vw;
  }
}
</style>
