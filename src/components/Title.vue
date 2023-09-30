<script setup>
defineProps({
  number: Number,
  text: String,
  color: String,
});
</script>

<template>
  <div
    class="container d-flex fl-col fl-a-c"
    :style="{ '--title-color': color }"
  >
    <div class="top d-flex fl-col fl-a-c">
      <div class="line hidden"></div>
      <div class="number hidden d-flex fl-j-c fl-a-c">
        <svg
          class="circle"
          width="60px"
          height="60px"
          xmlns="http://www.w3.org/2000/svg"
          transform="rotate(-95)"
        >
          <circle
            cx="30"
            cy="30"
            r="27"
            fill="none"
            :style="{ stroke: 'var(--title-color)' }"
            stroke-width="3"
          />
        </svg>
        <span>{{ number }}</span>
      </div>
    </div>
    <h1>{{ text }}</h1>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  padding-top: 170px;
}
h1 {
  color: var(--title-color);
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  padding: 30px;
}
.top {
  position: absolute;
  top: 0;
}
.line {
  width: 3.6px;
  height: 108px;
  border-radius: 7.2px;
  background: linear-gradient(
    180deg,
    #1d1c29 0%,
    var(--title-color) 50%,
    var(--title-color) 100%
  );
}
.number {
  position: relative;
  height: 60px;
  width: 60px;
  color: var(--title-color);
  font-size: 30px;
  font-weight: 400;
  stroke-dasharray: 315;
  opacity: 0;
}
.number span {
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.animate-line {
  -webkit-animation: slideDown .5s;
  animation: slideDown .5s;
}
.animate-circle {
  -webkit-animation: drawCircle .5s .5s forwards;
  animation: drawCircle .5s .5s forwards;
}

@keyframes slideDown {
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: 108px;
    opacity: 1;
  }
}

@keyframes drawCircle {
  0% {
    opacity: 0;
    stroke-dashoffset: 290;
  }
  100% {
    opacity: 1;
    stroke-dashoffset: 14;
  }
}
</style>
