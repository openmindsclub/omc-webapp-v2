<script setup>
import { computed, onMounted, ref } from "vue";
import Title from "./Title.vue";
import { useAppStore } from "../store/store";
import TerminalNavbar from "./TerminalNavbar.vue";

const events = [
  {
    title: "Install Party",
    description:
      "The Install Party is the OpenMinds club's flagship event, and has been held every year since 2008. \n The day-long event features a series of conferences, panels, workshops, challenges and many other activities focusing on the Free/Open Source philosophy, as well as Linux installations.",
    image: "/images/events/ip.jpg",
  },
  {
    title: "Arab Games 2023",
    description:
      "Open Minds Club was honored at the Pan Arab Games for its outstanding contribution, having played a crucial role in the success of the event in collaboration with the Pan Arab Games Commission. \nThe club was particularly recognized for its commitment and outstanding efforts in the tech, accreditation and protocol departments. This recognition highlights the importance of their hard work over three months, and represents a huge source of pride for the entire club community.",
    image: "/images/events/arab-games.jpeg",
  },
  {
    title: "1er Congrès de la jeunesse estudiantine francophone ( CJEF), Caire",
    description: "",
    image: "/images/events/congres1.jpg",
  },
  {
    title:
      "2eme Congrès de la jeunesse estudiantine francophone ( CJEF), Québec",
    description: "",
    image: "/images/events/congres2.jpg",
  },
  {
    title: "OMC Stands",
    description: "",
    image: "/images/events/stand.JPG",
  },
  // {
  //   title: "Hacktoberfest",
  //   description:
  //     "Le Hacktoberfest est un événement international dédié à l’Open Source. Il a pour but de promouvoir les contributions sur les projets Open Source sur GitHub.",
  //   image: "",
  // },
  // {
  //   title: "ClefCode",
  //   description:
  //     "Cléf Code est un concours organisé par les trois clubs algériens du réseau Cléf, sous le slogan “Codons Le Réel En Jeu Virtuel”. Ce game jam intensif de 48 heures réunit des développeurs passionnés qui explorent un thème inédit pour créer des expériences de jeu uniques.",
  //   image: "",
  // },

  // duplicate the list, just to ensure an infinite smoothe scroll
  {
    title: "Install Party",
    description:
      "The Install Party is the OpenMinds club's flagship event, and has been held every year since 2008. \n The day-long event features a series of conferences, panels, workshops, challenges and many other activities focusing on the Free/Open Source philosophy, as well as Linux installations.",
    image: "/images/events/ip.jpg",
  },
  {
    title: "Arab Games 2023",
    description:
      "Open Minds Club was honored at the Pan Arab Games for its outstanding contribution, having played a crucial role in the success of the event in collaboration with the Pan Arab Games Commission. \nThe club was particularly recognized for its commitment and outstanding efforts in the tech, accreditation and protocol departments. This recognition highlights the importance of their hard work over three months, and represents a huge source of pride for the entire club community.",
    image: "/images/events/arab-games.jpeg",
  },
  {
    title: "1er Congrès de la jeunesse estudiantine francophone ( CJEF), Caire",
    description: "",
    image: "/images/events/congres1.jpg",
  },
  {
    title:
      "2eme Congrès de la jeunesse estudiantine francophone ( CJEF), Québec",
    description: "",
    image: "/images/events/congres2.jpg",
  },
  {
    title: "OMC Stands",
    description: "",
    image: "/images/events/stand.JPG",
  },
];

const appStore = useAppStore();
const terminalMode = computed(() => appStore.terminalMode);

const slider = ref();
// const currentIndex = ref(0);
const itemWidth = ref(0);
const currentPosition = ref(0);
const isAnimationPaused = ref(false);

// function slideLeft() {
//   if (currentIndex.value > 0) {
//     currentIndex.value--;
//     updateSliderPosition();
//   }
// }

// function slideRight() {
//   if (currentIndex.value < events.length - 1 - 3) {
//     currentIndex.value++;
//     updateSliderPosition();
//   }
// }

// function updateSliderPosition() {
//   const offset = -currentIndex.value * itemWidth.value;
//   slider.value.style.transform = `translateX(${offset}px)`;
// }

// when clicking an item in the moving slider, stop the animation, and when clicking again, resume the animation
function toggleAnimation() {
  currentPosition.value = slider.value.getBoundingClientRect().left;
  if (isAnimationPaused.value) {
    slider.value.style.animationPlayState = "running";
    // slider.value.style.transform = `translateX(${currentPosition.value}px)`;
    isAnimationPaused.value = false;
  } else {
    slider.value.style.animationPlayState = "paused";
    isAnimationPaused.value = true;
  }
}

const selectedEvent = ref(null);
function selectEvent(event) {
  toggleAnimation();
  selectedEvent.value = event;
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
        {{ `> ${$t("desc-events")}` }}
      </p>
      <TerminalNavbar v-if="terminalMode" color="#49ac36" />
    </div>

    <!-- <div
      id="popup"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      v-if="selectedEvent"
    >
      <div
        :class="`bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative bg-[url(${selectedEvent?.image})] bg-cover bg-center`"
      >
        <h2 class="text-xl font-bold mb-4">{{ selectedEvent?.title }}</h2>
        <p class="text-gray-700">{{ selectedEvent?.description }}</p>

        <button
          id="closeButton"
          class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
          @click="selectEvent(null)"
        >
          &times;
        </button>
      </div>
    </div> -->

    <div class="slider-container">
      <div class="slider d-flex fl-a-c" ref="slider">
        <div
          class="item d-flex fl-j-c fl-a-c"
          v-for="(item, index) in events"
          :key="index"
          @click="selectEvent(item)"
        >
          <div
            class="item-wrapper"
            :style="{
              transform: index % 2 === 0 ? 'rotate(-3deg)' : 'rotate(3deg)',
            }"
          >
            <img :src="item.image" alt="" />
            <div class="bottom bg-black">
              <h3>{{ item.title }}</h3>
              <p>{{ "" }}</p>
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
  min-width: 125vw;
  font-family: Ubuntu Mono;
  font-size: 20px;
  font-weight: 700;
  color: white;
  /* overflow-x: scroll; */
}
.slider .item {
  position: relative;
  width: 25vw;
  min-width: 25vw;
  max-width: 25vw;
  border-radius: 16px;
  background-repeat: no-repeat;
  background-size: cover;
}
.item-wrapper {
  width: calc(100% - 20px);
  height: calc(100% - 20px);
}

.slider .item .bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  /* height: 100%; */
  padding: 20px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: end;
  /* background-color: rgba(0, 0, 0, 0.3); */
  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  text-align: left;
}
.slider img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 250px;
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
    height: auto;
    /* min-height: 150px; */
  }

  @keyframes sliderScroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-70vw * 5));
    }
  }
}
</style>
