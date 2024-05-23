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
      :text="`> ${$t('title-trusted-by')}`"
      number="6"
      color="#49ac36"
    ></Title>
    <p class="description">
      {{ `> ${$t("desc-trusted-by")}` }}
    </p>

    <div class="logos-container">
      <div class="logos-slider d-flex fl-a-c">
        <!-- <div class="card d-flex fl-a-c fl-j-c mjs">
          <img src="/images/logos/white/mjs-logo.svg" alt="" srcset="" />
          <img
            src="/images/logos/color/mjs-logo.svg"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img src="/images/logos/white/usthb-logo.svg" alt="" srcset="" />
          <img
            src="/images/logos/color/usthb-logo.svg"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img src="/images/logos/white/auf-logo.svg" alt="" srcset="" />
          <img
            src="/images/logos/color/auf-logo.svg"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div> -->
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/AimX.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/AimX.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/AlgeriePoste.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/AlgeriePoste.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/auf.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/auf.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/CAP.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/CAP.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/digitex.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/digitex.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/github.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/github.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/go.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/go.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/hp.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/hp.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/institutFrancais.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/institutFrancais.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/mlh.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/mlh.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/mozilla.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/mozilla.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/OpenHardwareAlgeia.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/OpenHardwareAlgeia.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/sdacs.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/sdacs.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
  
  
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/AimX.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/AimX.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/AlgeriePoste.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/AlgeriePoste.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/auf.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/auf.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/CAP.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/CAP.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/digitex.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/digitex.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/github.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/github.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/go.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/go.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/hp.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/hp.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/institutFrancais.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/institutFrancais.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/mlh.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/mlh.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/mozilla.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/mozilla.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/OpenHardwareAlgeia.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/OpenHardwareAlgeia.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
        <div class="card d-flex fl-a-c fl-j-c">
          <img
            src="/images/logos/white/sdacs.png"
            alt=""
            srcset=""
            class="white-logo"
          />
          <img
            src="/images/logos/color/sdacs.png"
            alt=""
            srcset=""
            class="color-logo"
          />
        </div>
  
      </div>
    </div>

  </section>
</template>

<style scoped>
section.trusted-by {
  padding: 1em 0;
  /* overflow: scroll; */
}
.logos-container {
  width: 100%;
  overflow: hidden;
}
.logos-slider {
  position: relative;
  padding-top: 50px;
  min-width: calc(15vw * 26);
  animation: logosScroll 24s linear infinite;
}
.card {
  position: relative;
  width: 15vw;
  max-width: 15vw;
  overflow-x: hidden;
  height: 180px;
}
.card img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.card.mjs {
  padding: 10px;
}

.color-logo {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}
.white-logo {
  position: absolute;
  top: 0;
  left: 0;
}

.card:hover .color-logo {
  display: inline-block;
}
.card:hover .white-logo {
  display: none;
}

@keyframes logosScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-15vw * 13));
  }
}

@media (max-width: 700px) {
  .logos-slider {
    min-width: calc(20vw * 26);
  }
  .card {
    width: 20vw;
    max-width: 20vw;
    padding: 10px
  }
  @keyframes logosScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-20vw * 13));
  }
}
}
</style>
