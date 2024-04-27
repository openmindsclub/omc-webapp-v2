<script setup>
import Title from "./Title.vue";
</script>

<template>
  <section class="section community">
    <div class="oval oval-left">
      <svg viewBox="0 0 505 803" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.19" filter="url(#filter0_f_489_2149)">
          <path
            d="M52.3679 601.425C155.156 591.16 222.596 538.938 288.733 418.394C422.714 174.194 -348.484 105.196 -243.068 370.815C-176.6 538.293 -78.9253 614.535 52.3679 601.425Z"
            fill="#E82B1F"
            fill-opacity="0.8"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_489_2149"
            x="-453.004"
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
              result="effect1_foregroundBlur_489_2149"
            />
          </filter>
        </defs>
      </svg>
    </div>
    <Title
      class="title"
      :text="`> ${$t('title-community')}`"
      number="6"
      color="#e82b1f"
    ></Title>

    <p class="description">{{ `> ${$t("desc-community")}` }}</p>

    <div class="stats w-100 d-flex">
      <div class="number d-flex fl-col fl-j-c fl-a-c">
        <p>41k<span>+</span></p>
        <p class="description">{{ $t("community") }}</p>
      </div>
      <div class="number d-flex fl-col fl-j-c fl-a-c">
        <p>40<span>+</span></p>
        <p class="description">{{ $t("events") }}</p>
      </div>
      <div class="number d-flex fl-col fl-j-c fl-a-c">
        <p>400<span>+</span></p>
        <p class="description">{{ $t("engagement") }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats {
  padding-top: 50px;
  color: white;
  font-size: 72px;
  font-weight: 800;
  justify-content: space-evenly;
  font-family: Ubuntu, sans-serif;
}
.stats .description {
  padding: 10px;
  font-family: Ubuntu, sans-serif;
  font-size: 20px;
}
.stats span {
  color: red;
}

.number:hover {
  scale: 1.1;
  cursor: pointer;
}

@media (max-width: 700px) {
  .stats {
    flex-direction: column;
  }
}
</style>
