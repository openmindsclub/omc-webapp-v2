<script setup>
import { computed, onMounted, ref } from "vue";
import Title from "./Title.vue";
import { useAppStore } from "../store/store";
import TerminalNavbar from "./TerminalNavbar.vue";

const events = [
  {
    title: "ARAB GAMES 1",
    description: "Event event event hehe",
    image: "event1.png",
  },
  {
    title: "ARAB GAMES 2",
    description: "Event event event hehe",
    image: "event1.png",
  },
  {
    title: "ARAB GAMES 3",
    description: "Event event event hehe",
    image: "event1.png",
  },
  {
    title: "ARAB GAMES 4",
    description: "Event event event hehe",
    image: "event1.png",
  },

  // duplicate the list, just to ensure an infinite smoothe scroll
  {
    title: "ARAB GAMES 1",
    description: "Event event event hehe",
    image: "event1.png",
  },
  {
    title: "ARAB GAMES 2",
    description: "Event event event hehe",
    image: "event1.png",
  },
  {
    title: "ARAB GAMES 3",
    description: "Event event event hehe",
    image: "event1.png",
  },
  {
    title: "ARAB GAMES 4",
    description: "Event event event hehe",
    image: "event1.png",
  },
];

const appStore = useAppStore();
const terminalMode = computed(() => appStore.terminalMode);

const slider = ref();
const currentIndex = ref(0);
const itemWidth = ref(0);

function slideLeft() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    updateSliderPosition();
  }
}

function slideRight() {
  if (currentIndex.value < events.length - 1 - 3) {
    currentIndex.value++;
    updateSliderPosition();
  }
}

function updateSliderPosition() {
  const offset = -currentIndex.value * itemWidth.value;
  slider.value.style.transform = `translateX(${offset}px)`;
}

onMounted(() => {
  itemWidth.value = slider.value.clientWidth / 4;
});
</script>

<template>
  <section class="section events">
    <div class="oval oval-right">
      <svg viewBox="0 0 499 803" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_429_1504)">
          <path
            d="M506.368 601.425C609.156 591.16 676.596 538.938 742.733 418.394C876.714 174.194 105.516 105.196 210.932 370.815C277.4 538.293 375.075 614.535 506.368 601.425Z"
            fill="#48BD32"
            fill-opacity="0.15"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_429_1504"
            x="0.996094"
            y="0.952393"
            width="957.426"
            height="801.914"
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
              result="effect1_foregroundBlur_429_1504"
            />
          </filter>
        </defs>
      </svg>
    </div>
    <div class="content">
      <Title
        class="title"
        text=">Our Events_🎬"
        number="2"
        color="#49ac36"
      ></Title>
      <p class="description" :style="terminalMode ? { color: 'white' } : {}">
        {{`> ${$t('desc-events')}`}}
      </p>
      <TerminalNavbar v-if="terminalMode" color="#49ac36" />
    </div>

    <div class="slider-container">
      <div class="slider d-flex fl-a-c" ref="slider">
        <div
          class="item d-flex fl-j-c fl-a-c"
          v-for="(item, index) in events"
          :key="index"
        >
          <div
            class="item-wrapper"
            :style="{
              transform: index % 2 === 0 ? 'rotate(-3deg)' : 'rotate(3deg)',
            }"
          >
            <img :src="`/images/${item.image}`" alt="" />
            <div class="content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <button class="left" @click="slideLeft()">
        <img src="../assets/svg/arrow-left.svg" alt="" />
      </button>
      <button class="right" @click="slideRight()">
        <img src="../assets/svg/arrow-right.svg" alt="" />
      </button> -->
    </div>
  </section>
</template>

<style scoped>
section.events {
  padding: 1em 0;
  /* overflow: scroll; */
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 5%;
}

.slider-container {
  position: relative;
  margin: 50px auto;
  width: 100%;
  /* height: 310px; */
  overflow: hidden;
}
.slider-container button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 45px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: white;
  cursor: pointer;
}
.slider-container .left {
  left: 20px;
}
.slider-container .right {
  right: 20px;
}
.slider {
  min-width: 100vw;
  font-family: Ubuntu Mono;
  font-size: 20px;
  font-weight: 700;
  color: white;
  /* overflow-x: scroll; */
}
.slider .item {
  position: relative;
  width: 25%;
  min-width: 25%;
  max-width: 25%;
  border-radius: 16px;
  background-repeat: no-repeat;
  background-size: cover;
}
.item-wrapper {
  width: calc(100% - 20px);
  height: calc(100% - 20px);
}

.slider .item .content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-color: rgba(0, 0, 0, 0.3);
  text-align: left;
}
.slider img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* make the slider scroll infinitely slowly */
.slider {
  animation: sliderScroll 24s linear infinite;
}
.item .content {
  align-items: flex-start;
}

.item p {
  font-size: 16px;
  font-weight: 400;
  color: white;
}
@keyframes sliderScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@media (max-width: 900px) {
  .slider {
    min-width: 100%;
    min-height: 150px;
    height: auto;
    font-size: 15px;
    /* overflow-x: scroll; */
  }
  .slider .item {
    width: 70vw;
    min-width: 70vw;
    max-width: 70vw;
    height: auto
    /* min-height: 150px; */
  }

  @keyframes sliderScroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-280vw);
    }
  }
}
</style>
