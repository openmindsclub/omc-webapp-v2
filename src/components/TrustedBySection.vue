<script setup>
import Title from "./Title.vue";
</script>

<template>
  <section class="section trusted-by">
    <div class="oval oval-right">
      <svg viewBox="0 0 486 803" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.19" filter="url(#filter0_f_489_2150)">
          <path
            d="M506.368 601.425C609.156 591.16 676.596 538.938 742.733 418.394C876.714 174.194 105.516 105.196 210.932 370.815C277.4 538.293 375.075 614.535 506.368 601.425Z"
            fill="#48C92F"
            fill-opacity="0.8"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_489_2150"
            x="0.996094"
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
              result="effect1_foregroundBlur_489_2150"
            />
          </filter>
        </defs>
      </svg>
    </div>
    <Title
      class="title"
      text=">Trusted By_✅"
      number="7"
      color="#49ac36"
    ></Title>
    <p class="description">
      > welcome in omc website if u want to that aims to hilk <br />
      promote the spirit of collaboration between students, sharing knowledge,
      <br />
      the Free Open Source Philosophy inside and outside again welcome
    </p>

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
  width: 180px;
  height: 180px;
  border-radius: 14px;
  background-color: var(--color-black);
  padding: 20px;
}
.card.mjs {
  padding: 10px;
}
</style>
