<script setup>
import { computed, ref } from "vue";
import Title from "../components/Title.vue";
import { useAppStore } from "../store/store";

const appStore = useAppStore();
const terminalMode = computed(() => appStore.terminalMode);
</script>

<template>
  <section class="section activities">
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
      :text="`> ${$t('title-activities')}`"
      number="5"
      color="#f8ae28"
    ></Title>
    <p class="description" :style="terminalMode ? { color: 'white' } : {}">
      {{ `> ${$t("desc-activities")}` }}
    </p>

    <div class="content w-100 d-flex fl-col fl-j-sb">
      <div class="branches-overlay"></div>
      <svg
        width="206px"
        height="900px"
        viewBox="0 0 206 1135"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="banches-svg"
      >
        <rect x="101" y="18" width="3" height="1100" fill="#4A4954" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M102 518C104.209 518 106 516.209 106 514C106 511.791 104.209 510 102 510C99.7909 510 98 511.791 98 514C98 516.209 99.7909 518 102 518ZM102 520C105.314 520 108 517.314 108 514C108 510.686 105.314 508 102 508C98.6863 508 96 510.686 96 514C96 517.314 98.6863 520 102 520Z"
          fill="#686770"
        />
        <path
          d="M198.498 178.501C198.498 178.501 198.998 187 196.499 138.505C193.999 90.0093 143.498 116.424 126.498 101.006C109.498 85.5871 101.998 69.0057 101.998 69.0057"
          stroke="#4A4954"
          stroke-width="3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M198.5 195.5C201.261 195.5 203.5 193.261 203.5 190.5C203.5 187.739 201.261 185.5 198.5 185.5C195.739 185.5 193.5 187.739 193.5 190.5C193.5 193.261 195.739 195.5 198.5 195.5ZM198.5 198C202.642 198 206 194.642 206 190.5C206 186.358 202.642 183 198.5 183C194.358 183 191 186.358 191 190.5C191 194.642 194.358 198 198.5 198Z"
          fill="#686770"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.5 712.5C10.2614 712.5 12.5 710.261 12.5 707.5C12.5 704.739 10.2614 702.5 7.5 702.5C4.73863 702.5 2.5 704.739 2.5 707.5C2.5 710.261 4.73863 712.5 7.5 712.5ZM7.5 715C11.6421 715 15 711.642 15 707.5C15 703.358 11.6421 700 7.5 700C3.35788 700 0 703.358 0 707.5C0 711.642 3.35788 715 7.5 715Z"
          fill="#686770"
        />
        <path
          d="M7.50001 695.5C7.50001 695.5 7.50018 703.5 7.50014 656.499C7.50011 609.497 53 635 77.5002 619C102 603 102 579.5 102 579.5"
          stroke="#4A4954"
          stroke-width="3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M102.5 1132.83C104.893 1132.83 106.833 1130.89 106.833 1128.5C106.833 1126.11 104.893 1124.17 102.5 1124.17C100.107 1124.17 98.1667 1126.11 98.1667 1128.5C98.1667 1130.89 100.107 1132.83 102.5 1132.83ZM102.5 1135C106.09 1135 109 1132.09 109 1128.5C109 1124.91 106.09 1122 102.5 1122C98.9102 1122 96 1124.91 96 1128.5C96 1132.09 98.9102 1135 102.5 1135Z"
          fill="#686770"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M103 10C105.209 10 107 8.2091 107 6C107 3.79086 105.209 2 103 2C100.791 2 99 3.79086 99 6C99 8.2091 100.791 10 103 10ZM103 12C106.314 12 109 9.3137 109 6C109 2.68629 106.314 0 103 0C99.6863 0 97 2.68629 97 6C97 9.3137 99.6863 12 103 12Z"
          fill="#686770"
        />
      </svg>

      <div class="d-flex fl-a-c activity">
        <div class="card">
          <div class="image">
            <img src="../assets/images/omc-blog.png" alt="" srcset="" />
          </div>
          <div class="body">
            <h3>OMC activities!</h3>
            <!-- <p>Check our blog and learn more about open source!</p> -->
          </div>
        </div>
        <div>
          <h2 class="subtitle">{{ `> ${$t("title-workshops-tuto")}` }}</h2>
          <p class="desc">
            {{ `> ${$t("desc-open-wiki")}` }}
          </p>
          <!-- <a href="#" class="link d-flex fl-a-c fl-j-c"
            >Visit Now <img src="../assets/svg/arrow-right.svg" alt="" />
          </a> -->
        </div>
      </div>
      <div class="d-flex fl-a-c activity activity-2">
        <div>
          <h2 class="subtitle">{{ `> ${$t("title-open-wiki")}` }}</h2>
          <p class="desc">
            {{ `> ${$t("desc-open-wiki")}` }}
          </p>
          <a
            href="https://wiki.openmindsclub.net/"
            class="link d-flex fl-a-c fl-j-c"
            >Visit Now <img src="../assets/svg/arrow-right.svg" alt="" />
          </a>
        </div>
        <div class="card">
          <div class="image">
            <img src="../assets/images/open-wiki.png" alt="" srcset="" />
          </div>
          <div class="body">
            <h3>Open Wiki</h3>
            <!-- <p>Welcome to the Free Open Source Wiki !</p> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.content {
  position: relative;
  min-height: 900px;
  padding-top: 100px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
}
.content .desc {
  position: relative;
  width: 100%;
  max-width: 400px;
  font-family: Ubuntu Mono;
  font-weight: 400;
  padding-top: 10px;
  padding-bottom: 20px;
}

#banches-svg,
.branches-overlay {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  height: 900px;
}
#branches-svg {
  top: 0;
}
.activity {
  gap: 210px;
  justify-content: space-evenly;
  z-index: 100;
}

.link {
  width: 170px;
  height: 37px;
  padding: 16px, 24px, 16px, 24px;
  border: 2px solid #7fadf4;
  border-radius: 20px;
}
.link img {
  width: 24px;
}

.card {
  width: 498px;
  /* min-width: 498px; */
  /* max-width: 100%; */
  /* height: 419px; */
  border-radius: 14px;
  padding: 5px;
  font-size: 15px;
  background-color: #1e1f21;
}
.card .image {
  width: 100%;
  height: 270px;
}
.card .body {
  padding: 10px;
}
.card h3 {
  font-size: 25px;
  padding-bottom: 20px;
}

.subtitle {
  font-family: Ubuntu Mono;
  font-size: 32px;
  font-weight: 700;
  text-align: left
}

.branches-overlay {
  bottom: -20px;
  width: 190px;
  background-color: var(--color-dark-blue);
  z-index: 10;
  height: 100%;
}

.animate {
  -webkit-animation: animateBranches 2s ease-in-out forwards;
  animation: animateBranches 2s ease-in-out forwards;
}

@keyframes animateBranches {
  0% {
    height: 100%;
  }
  100% {
    height: 0;
  }
}

@media (max-width: 700px) {
  .activity {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 50px;
  }
  .card {
    width: 360px;
    height: 260px;
    /* max-width: 80vw;
    max-height: 266px; */
  }
  .card .image {
    height: 200px;
  }
  .card p {
    display: none;
  }
  .subtitle {
    font-size: 22px;
  }
  .content .desc {
    font-size: 18px;
  }
  #banches-svg,
  .branches-overlay {
    display: none;
  }
  .activity-2 {
    flex-direction: column-reverse;
  }
}
</style>
