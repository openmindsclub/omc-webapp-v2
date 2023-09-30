<script setup>
defineProps({
  number: Number,
  text: String,
});
</script>

<template>
  <div class="d-flex fl-col fl-a-c">
    <div class="d-flex fl-col fl-a-c">
      <div class="line animate"></div>
      <div class="number animate d-flex fl-j-c fl-a-c">
        <span>{{ number }}</span>
      </div>
    </div>
    <h1>{{ text }}</h1>
  </div>
</template>

<style scoped>
h1 {
  color: #fff;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  padding: 30px;
}
.line {
  width: 3.6px;
  height: 108px;
  border-radius: 7.2px;
  background: linear-gradient(
    180deg,
    #1e1f21 0%,
    #3173bb 99.98%,
    rgba(117, 166, 237, 0.56) 99.99%,
    #3173bb 100%
  );
}
.number {
  width: 62.4px;
  height: 62.4px;
  color: var(--color-blue);
  font-size: 30px;
  font-weight: 400;
  border-radius: 50%;
  border: 3.6px solid var(--color-blue);
}

.animate {
  -webkit-animation: slideDown 1s;
  animation: slideDown 1s;
}

@keyframes slideDown {
  from {
    transform: translateY(-108px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
