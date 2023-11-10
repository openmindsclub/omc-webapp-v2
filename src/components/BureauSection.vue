<script setup>
import { ref } from "vue";
import Title from "../components/Title.vue";
import SuitIcon from "../assets/svg/suit.svg";

import image1 from "../assets/images/nada.png";

const svgRef = ref();
const gradientStops = ref(0);
function animateGradient(event) {
  const width = svgRef.value.offsetWidth;
  const x = event.clientX - svgRef.value.getBoundingClientRect().left;
  gradientStops.value = (x * 100) / width;
}

const members = [
  {
    name: "Nad Tis",
    description: "Hello 👋 I'm the president.",
    image: image1,
  },
  {
    name: "Nad Tis",
    description: "Hello 👋 I'm the president.",
    image: image1,
  },
  {
    name: "Nad Tis",
    description: "Hello 👋 I'm the president.",
    image: image1,
  },
  {
    name: "Nad Tis",
    description: "Hello 👋 I'm the president.",
    image: image1,
  },
];
</script>

<template>
  <section id="bureau" class="section">
    <Title class="title" text="" number="1" color="#3173BB"></Title>
    <div class="oval">
      <svg
        width="894"
        height="757"
        viewBox="0 0 894 757"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_492_2165)">
          <path
            d="M470.651 554.986C561.723 545.891 621.476 499.622 680.074 392.817C798.785 176.451 115.488 115.318 208.889 350.661C267.781 499.05 354.323 566.602 470.651 554.986Z"
            fill="#3173BB"
            fill-opacity="0.2"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_492_2165"
            x="0.0859375"
            y="0.159668"
            width="893.891"
            height="756.104"
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
              result="effect1_foregroundBlur_492_2165"
            />
          </filter>
        </defs>
      </svg>
    </div>

    <div
      ref="svgRef"
      class="svg-container d-flex fl-j-c fl-a-c"
      @mousemove="animateGradient"
    >
      <div class="title-container d-flex fl-col fl-a-c">
        <p>Meet</p>
        <h1 class="title">Our Bureau</h1>
        <img class="icon" :src="SuitIcon" alt="" srcset="" />
      </div>

      <div class="cards">
        <div class="card" v-for="member in members">
          <h2>{{ member.name }}</h2>
          <p>{{ member.description }}</p>
        </div>
      </div>

      <svg
        width="100%"
        viewBox="0 0 1282 473"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M203.178 79.0636C203.178 79.0636 200.578 148.374 205.56 157.571C210.542 166.769 221.939 178.154 223.495 178.5C228 179.5 258 177 268 178.5C278 180 285.5 189 289.684 198.812C293.867 208.624 295.286 224 295.286 224M295.655 250.338C295.655 250.338 299.973 272.716 312.594 278.081C325.215 283.446 331.193 282.68 331.193 282.68H483.643C483.643 282.68 603.171 283.85 604.5 285C605.829 286.15 614.172 284.979 624.468 299.159C634.764 313.339 634.764 342.082 634.764 342.082M634.764 342.082V408M634.764 342.082C634.764 342.082 639.746 319.471 648.381 312.19C657.017 304.908 676.613 306.824 676.613 306.824H774.592H828.564H882.536H925.712C925.712 306.824 942.984 304.141 958.594 291.495C974.204 278.848 974.204 256.62 974.204 256.62M974.204 264V220.255V192.273M1026.68 73.5577C1026.68 73.5577 1027.35 86.636 1024.02 97.75C1020.7 108.864 1005.42 115.445 1005.42 115.445C1005.42 115.445 984.168 130.242 980.182 135.99C976.197 141.739 974.204 162.62 974.204 162.62V192.273M974.204 192.273C974.204 192.273 960.406 192.247 952.948 187.674C943.43 181.839 940.326 179.626 935.344 163.147C930.362 146.668 932.023 130.955 932.023 130.955V15M295.909 251.5L295.224 223.39"
          stroke="#4A4954"
          stroke-width="3"
        />
        <path
          d="M864.5 306C864.5 306 866.439 324.339 868.378 328.631C870.317 332.924 874.97 339.167 878.848 341.898C882.726 344.63 893.584 349.702 893.584 349.702C893.584 349.702 895.135 350.873 901.34 351.653C907.545 352.434 921.117 351.653 921.117 351.653H986.266H1061.89H1252.29H1315.5"
          stroke="#4A4954"
          stroke-width="3"
        />
        <circle
          cx="18"
          cy="18"
          r="16.5"
          transform="matrix(-1 0 0 1 250.5 155)"
          fill="#1D1C29"
          stroke="#4A4954"
          stroke-width="3"
        />
        <path
          d="M235.875 165.312C235.875 164.588 235.287 164 234.562 164H230.438C229.713 164 229.125 164.588 229.125 165.312V167H225.562C224.838 167 224.25 167.588 224.25 168.312V179.188C224.25 179.536 224.388 179.869 224.634 180.116C224.881 180.362 225.214 180.5 225.562 180.5H239.438C239.786 180.5 240.119 180.362 240.366 180.116C240.612 179.869 240.75 179.536 240.75 179.188V168.312C240.75 167.588 240.162 167 239.438 167H235.875V165.312ZM239.625 172.993V179.188C239.625 179.291 239.541 179.375 239.438 179.375H225.562C225.513 179.375 225.465 179.355 225.43 179.32C225.395 179.285 225.375 179.237 225.375 179.188V172.993C225.95 173.482 226.682 173.751 227.438 173.75H237.562C238.318 173.751 239.05 173.482 239.625 172.993ZM225.375 170.562V168.312C225.375 168.263 225.395 168.215 225.43 168.18C225.465 168.145 225.513 168.125 225.562 168.125H239.438C239.487 168.125 239.535 168.145 239.57 168.18C239.605 168.215 239.625 168.263 239.625 168.312V170.562C239.625 171.11 239.408 171.634 239.021 172.021C238.634 172.408 238.11 172.625 237.562 172.625H227.438C226.89 172.625 226.366 172.408 225.979 172.021C225.592 171.634 225.375 171.11 225.375 170.562ZM230.25 165.312C230.25 165.263 230.27 165.215 230.305 165.18C230.34 165.145 230.388 165.125 230.438 165.125H234.562C234.612 165.125 234.66 165.145 234.695 165.18C234.73 165.215 234.75 165.263 234.75 165.312V167H230.25V165.312Z"
          fill="#C4C4C4"
        />
        <circle
          cx="18"
          cy="18"
          r="16.5"
          transform="matrix(-1 0 0 1 996.5 171)"
          fill="#1D1C29"
          stroke="#4A4954"
          stroke-width="3"
        />
        <path
          d="M981.875 181.312C981.875 180.588 981.287 180 980.562 180H976.438C975.713 180 975.125 180.588 975.125 181.312V183H971.562C970.838 183 970.25 183.588 970.25 184.312V195.188C970.25 195.536 970.388 195.869 970.634 196.116C970.881 196.362 971.214 196.5 971.562 196.5H985.438C985.786 196.5 986.119 196.362 986.366 196.116C986.612 195.869 986.75 195.536 986.75 195.188V184.312C986.75 183.588 986.162 183 985.438 183H981.875V181.312ZM985.625 188.993V195.188C985.625 195.291 985.541 195.375 985.438 195.375H971.562C971.513 195.375 971.465 195.355 971.43 195.32C971.395 195.285 971.375 195.237 971.375 195.188V188.993C971.95 189.482 972.682 189.751 973.438 189.75H983.562C984.318 189.751 985.05 189.482 985.625 188.993ZM971.375 186.562V184.312C971.375 184.263 971.395 184.215 971.43 184.18C971.465 184.145 971.513 184.125 971.562 184.125H985.438C985.487 184.125 985.535 184.145 985.57 184.18C985.605 184.215 985.625 184.263 985.625 184.312V186.562C985.625 187.11 985.408 187.634 985.021 188.021C984.634 188.408 984.11 188.625 983.562 188.625H973.438C972.89 188.625 972.366 188.408 971.979 188.021C971.592 187.634 971.375 187.11 971.375 186.562ZM976.25 181.312C976.25 181.263 976.27 181.215 976.305 181.18C976.34 181.145 976.388 181.125 976.438 181.125H980.562C980.612 181.125 980.66 181.145 980.695 181.18C980.73 181.215 980.75 181.263 980.75 181.312V183H976.25V181.312Z"
          fill="#C4C4C4"
        />
        <path
          d="M362 282C362 282 360.061 300.339 358.122 304.631C356.183 308.924 351.53 315.167 347.652 317.898C343.774 320.63 332.916 325.702 332.916 325.702C332.916 325.702 331.365 326.873 325.16 327.653C318.955 328.434 305.383 327.653 305.383 327.653H240.234H164.615H-25.7902H-89"
          stroke="#4A4954"
          stroke-width="3"
        />

        <image
          x="164.5"
          y="0"
          width="81"
          height="81"
          :xlink:href="members[0].image"
          clip-path="url(#avatar-clip-1)"
        />

        <image
          x="901.5"
          y="50"
          width="81"
          height="81"
          :xlink:href="members[1].image"
          clip-path="url(#avatar-clip-3)"
        />

        <image
          x="186"
          y="288"
          width="81"
          height="81"
          :xlink:href="members[2].image"
          clip-path="url(#avatar-clip-4)"
        />

        <image
          x="982.5"
          y="311"
          width="81"
          height="81"
          :xlink:href="members[3].image"
          clip-path="url(#avatar-clip-2)"
        />

        <defs>
          <clipPath id="avatar-clip-1">
            <circle cx="205" cy="41" r="40.5" />
          </clipPath>
          <clipPath id="avatar-clip-2">
            <circle cx="1023" cy="351.5" r="40.5" />
          </clipPath>
          <clipPath id="avatar-clip-3">
            <circle cx="942" cy="90.5" r="40.5" />
          </clipPath>
          <clipPath id="avatar-clip-4">
            <circle cx="226.5" cy="328.588" r="40.5" />
          </clipPath>

          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              v-if="gradientStops > 20"
              offset="0%"
              style="stop-color: rgba(74, 73, 84, 0.2)"
            />
            <stop
              v-if="gradientStops > 20"
              :offset="`${gradientStops - 20}%`"
              style="stop-color: #4a4954"
            />
            <stop :offset="`${gradientStops}%`" style="stop-color: #7fadf4" />
            <stop
              v-if="gradientStops < 80"
              :offset="`${gradientStops + 20}%`"
              style="stop-color: #4a4954"
            />
            <stop
              v-if="gradientStops < 80"
              offset="100%"
              style="stop-color: rgba(74, 73, 84, 0.2)"
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </section>
</template>

<style scoped>
#bureau {
  padding: 0;
}
.svg-container {
  width: 100%;
  position: relative;
}
.svg-container:hover path {
  stroke: url(#gradient1);
}
.oval {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.svg-container .title-container {
  position: absolute;
  top: 20%;
  text-align: center;
  color: #c4c4c4;
  font-size: 24px;
}
h1 {
  color: var(--color-blue);
  padding: 10px;
}
.icon {
  width: 40px;
}
.cards {
  position: absolute;
  inset: 0 0;
}
.card {
  position: absolute;
  background-color: var(--color-black);
  border-radius: 15px;
  font-size: 16px;
  padding: 10px;
  color: #fff;
}
.card:nth-child(1) {
  top: 90px;
  left: 10px;
}
.card:nth-child(2) {
  top: 90px;
  right: 10px;
}
.card:nth-child(3) {
  bottom: 90px;
  left: 10px;
}
.card:nth-child(4) {
  bottom: 90px;
  right: 10px;
}
.card h2 {
  font-size: 21px;
  font-weight: 500;
  color: var(--color-blue);
}

@media (max-width: 700px) {
  .cards {
    display: none;
  }
  .svg-container .title-container {
    top: 0;
  }
}
</style>
