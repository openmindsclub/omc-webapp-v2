<script setup>
import { onMounted } from "vue";
import Title from "./components/Title.vue";

// observer to run the animation everytime the title is in the view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const line = entry.target.querySelector(".line");
    const circle = entry.target.querySelector(".number");
    if (entry.intersectionRatio > 0) {
      line?.classList.remove("hidden");
      line?.classList.add("animate-line");
      circle?.classList.add("animate-circle");
      circle?.classList.remove("hidden");
    } else {
      line?.classList.add("hidden");
      line?.classList.remove("animate-line");
      circle?.classList.add("hidden");
      circle?.classList.remove("animate-circle");
    }
  });
});

onMounted(() => {
  const titles = document.querySelectorAll(".title");
  titles.forEach((el) => {
    observer.observe(el);
  });
});
</script>

<template>
  <section class="section about">
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
      text=">Get to Know Us!_👋"
      number="1"
      color="#f8ae28"
    ></Title>
    <p class="description">
      > welcome in omc website if u want to that aims to hilk <br />
      promote the spirit of collaboration between students, sharing
      knowledge,<br />the Free Open Source Philosophy inside and outside again
      welcome in omc website if u want to that aims to hilk promote the spirit
      of collaboration between students, sharing knowledge,the Free Open Source
      Philosophy inside and outside
    </p>
  </section>
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
    <div class="content d-flex fl-j-sb">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </section>
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
    <Title
      class="title"
      text=">Our Events_🎬"
      number="3"
      color="#49ac36"
    ></Title>
    <p class="description">
      > welcome in omc website if u want to that aims to hilk <br />
      promote the spirit of collaboration between students, sharing knowledge,
      <br />the Free Open Source Philosophy inside and outside again welcome in
      omc website if u want to that aims to hilk promote the spirit of
      collaboration between students, sharing knowledge,the Free Open Source
      Philosophy inside and outside
    </p>
  </section>
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
      text=">Our Partners_🤝"
      number="4"
      color="#3173bb"
    ></Title>
    <p class="description">
      > welcome in omc website if u want to that aims to hilk <br />
      promote the spirit of collaboration between students, sharing knowledge,
      <br />the Free Open Source Philosophy inside and outside again welcome
    </p>
  </section>
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
      text=">Our Activities_🧩"
      number="5"
      color="#f8ae28"
    ></Title>
  </section>
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
      text=">Our Community_🕸️"
      number="6"
      color="#e82b1f"
    ></Title>
  </section>
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
  </section>
  <section class="section faq">
    <Title class="title" text=">FAQ_⁉️" number="8" color="#e82b1f"></Title>
  </section>
</template>

<style scoped>
.section {
  position: relative;
  width: 100%;
  min-height: 105vh;
  overflow: hidden;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section .description {
  color: var(--color-grey);
  text-align: center;
  font-family: Ubuntu Mono;
  font-size: 24px;
  font-weight: 400;
}
.section.about {
  background-image: url(./assets/images/members.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
}
.oval {
  position: absolute;
  top: -50px;
  height: 500px;
}
.oval svg {
  height: 100%;
}
.oval-left {
  left: 0;
}
.oval-right {
  right: 0;
}

.hidden {
  opacity: 0;
}
.show {
  opacity: 1;
}
</style>
