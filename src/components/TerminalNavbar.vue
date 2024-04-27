<script setup>
defineProps({
  color: String,
});
</script>
<template>
  <div class="terminal-navbar">
    <p class="description" :style="{color}">[user @openminds]$ what next? <span class="blinker"></span></p>
  </div>
  <!-- <ul class="d-flex fl-a-c menu" :class="{ open: isOpen }">
    <li>
      <a href="#about"><span>About Us</span> <img :src="Hand" alt="" /></a>
    </li>
    <li>
      <a href="#events"><span>Events</span> <img :src="Events" alt="" /></a>
    </li>
    <li>
      <a href="#activities"
        ><span>Projects</span> <img :src="Pazel" alt=""
      /></a>
    </li>
    <li>
      <a href="#FAQ"><span>FAQ</span> <img :src="Qst" alt="" /></a>
    </li>
  </ul> -->
</template>

<style scoped>
.terminal-navbar {
  padding-top: 20px;
  padding-bottom: 50px;
  width: 95%;
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
