<script setup>
import Title from "./Title.vue";
</script>

<template>
  <section class="section open-source">
    <div class="oval oval-left">
      <svg viewBox="0 0 506 749" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_429_1505)">
          <path
            d="M16.3381 547.638C134.897 539.645 212.295 495.093 287.608 391.492C440.177 181.614 -450.586 115.416 -326.642 345.843C-248.493 491.132 -135.099 557.848 16.3381 547.638Z"
            fill="#E82B1F"
            fill-opacity="0.19"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_429_1505"
            x="-538.516"
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
              result="effect1_foregroundBlur_429_1505"
            />
          </filter>
        </defs>
      </svg>
    </div>
    <Title
      class="title"
      text=">Open Source?_🌐"
      number="2"
      color="#e82b1f"
    ></Title>
    <div class="content row w-100 d-flex fl-a-c fl-j-sb">
      <div class="left d-flex fl-col fl-j-sb">
        <div>
          <h2 class="subtitle">> Title of section 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do eiusmod tempor <br />
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <h2 class="subtitle">> Title of section 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do eiusmod tempor <br />
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div class="divider-container d-flex fl-j-c">
        <div class="divider"></div>
        <img src="../assets/svg/divider.svg" alt="" />
      </div>
      <div class="right d-flex fl-j-c fl-a-c">
        <div class="card"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.content {
  position: relative;
  gap: 50px;
}
.open-source .left,
.open-source .right {
  width: 40%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  color: #fff;
  font-family: Ubuntu Mono;
  font-size: 20px;
  font-weight: 400;
  gap: 80px;
}
.open-source .card {
  width: 430px;
  max-width: 90%;
  height: 280px;
  background-color: #0d1117;
  border-radius: 10px;
}
.subtitle {
  font-family: Ubuntu Mono;
  font-size: 32px;
  font-weight: 700;
  padding-bottom: 10px;
}

.hidden {
  opacity: 0;
}
.show {
  opacity: 1;
}

.divider-container {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 500px;
  /* width: 20%; */
  width: 50px;
}
.divider {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-dark-blue);
}
.animate-divider {
  animation: slideDown1 ease-in-out 2s forwards;
  animation-delay: 0.5s;
}

@keyframes slideDown1 {
  from {
    height: 100%;
  }
  to {
    height: 0;
  }
}

@media (max-width: 700px) {
  .subtitle {
    font-size: 22px;
  }
  .divider-container {
    display: none;
  }
  .row {
    flex-direction: column;
    align-items: center;
  }
  .open-source .left,
  .open-source .right {
    font-size: 14px;
    width: 90%;
    text-align: center;
    gap: 10px;
  }
}
</style>
