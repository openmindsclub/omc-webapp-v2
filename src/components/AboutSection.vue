<script setup>
import { computed } from "vue";
import { useAppStore } from "../store/store";
import Title from "./Title.vue";
import TerminalNavbar from "./TerminalNavbar.vue";
import FooterSvg from "../assets/svg/footer.svg";

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
      :text="`>${$t('button-about')}`"
      number="1"
      color="#f8ae28"
    ></Title>

    <div class="flex flex-col items-center justify-center w-full md:flex-row">
      <p
        class="description md:w-50"
        :style="terminalMode ? { color: 'white', maxWidth: '95%' } : {}"
      >
        {{ `> ${$t("desc-about-us")}` }}
      </p>
      
      <div class="video-container w-100 md:w-50 mt-10">
        <iframe
        width="100%"
        height="100%"
          src="https://www.youtube.com/embed/ysnt-nAPTNo?si=Ro8LCAz74Z7XlFUV&autoplay=1&loop=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <TerminalNavbar v-if="terminalMode" color="#f8ae28" />
    <br />
  </section>
</template>

<style scoped>
.about {
  background-image: url(../assets/images/members.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
}

.video-container {
  aspect-ratio: 16/9;
}

@media (max-width: 700px) {
  .about {
    background-position: center 80%;
  }
}
</style>
