<script setup>
import { computed } from "vue";
import { useAppStore } from "../store/store";
import { setTerminalMode } from "../helpers/store";

const appStore = useAppStore();
const terminalMode = computed(() => appStore.terminalMode);

function exit() {
  setTerminalMode(false);
}
</script>

<template>
  <div class="top-bar d-flex fl-a-c">
    <button class="close" @click="exit"></button>
    <button class="minimize"></button>
    <button class="maximize"></button>
    <p>Linux-shell</p>
  </div>
</template>

<style scoped>
.top-bar {
  width: 100%;
  position: relative;
  height: 50px;
  background-color: #13181e;
  border-radius: 12px 12px 0 0;
  padding: 0 20px;
  color: white;
}
.top-bar p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.top-bar button {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 0 2px;
  border: none;
}
.top-bar .close {
  background-color: #ff6059;
}
.top-bar .minimize {
  background-color: #ffbd2e;
}
.top-bar .maximize {
  background-color: #29ca42;
}
</style>
