<script setup>
import { computed, ref } from "vue";
import { useAppStore } from "../store/store";
import { setTerminalMode } from "../helpers/store";
import WindowBar from "./WindowBar.vue";

const appStore = useAppStore();
const terminalMode = computed(() => appStore.terminalMode);

function toggleDisplay() {
  setTerminalMode(true);
}

// when clicking the little tux icon, I want it to jump up and down for a little bit
function jumpAnimation() {
  const tux = document.querySelector(".tux");
  tux.classList.add("jump");
  setTimeout(() => {
    tux.classList.remove("jump");
  }, 1000);
}
</script>

<template>
  <section class="section hero d-flex fl-col fl-j-c fl-a-c">
    <h1>Open Minds Club</h1>
    <p>{{ $t("header") }}</p>

    <div class="btns d-flex fl-j-c fl-a-c row">
      <button class="reg-btn d-flex fl-a-c fl-j-c" disabled>
        <span>{{ $t("button-register") }}</span><img src="../Images/ArrowRight.svg" alt="" />
      </button>
      <a
        href="https://discord.gg/EXStpgZM"
        target="”_blank”"
        class="dis-btn d-flex fl-a-c fl-j-c"
      >
        <span>{{ $t("button-join-discord") }}</span><img src="../Images/discord.svg" alt="" />
      </a>
    </div>

    <div class="terminal-wrapper">
      <WindowBar />
      <div class="terminal">
        <p>{{`[user @openminds]$ ${$t('welcome')}`}} <br /></p>
        <!-- blinker -->
        <p>[user @openminds]$ <span class="blinker"></span></p>
        <div class="bottom d-flex fl-col fl-a-c fl-j-c">
          <img
            @click="jumpAnimation"
            class="tux"
            src="../assets/svg/tux.svg"
            alt=""
            srcset=""
          />
          <p @click="toggleDisplay" class="terminal-mode-btn">
            {{`[${$t('button-open-terminal')}]`}}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  color: white;
  /* background-image: url(../assets/svg/bg.svg);
  background-repeat: no-repeat;
  background-size: 90%;
  background-position: center; */
}
.hero h1 {
  font-size: 80px;
  background: linear-gradient(92deg, #3173bb 5.52%, #007aff 113.52%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
}

.hero > p {
  max-width: 600px;
  font-size: 40px;
  font-weight: 400;
  line-height: 130%;
  margin-top: 20px;
  text-align: center;
}

.hero .btns {
  margin-top: 30px;
  gap: 10px;
}

.btns a,
.btns button {
  height: 48px;
  gap: 10px;
  padding: 0 40px;
  border-radius: 6px;
  font-size: 20px;
  border: 2px solid #3173bb;
  cursor: pointer;
  color: #fff;
}
.hero .btns a:hover {
  border-color: white;
}
.hero .btns img {
  width: 20px;
  height: 20px;
}

.dis-btn {
  background: none;
  background: var(
    --gradiant-omc,
    linear-gradient(92deg, #3173bb 5.52%, #007aff 113.52%)
  );
  box-shadow: 0px 18px 61px -12px rgba(34, 117, 207, 0.19);
}
.reg-btn {
  background-color: rgba(0, 0, 0, 0);
  opacity: 0.5;
  cursor: not-allowed;
  cursor: cell;
}

.terminal-wrapper {
  margin-top: 50px;
  width: 100%;
  max-width: 850px;
  padding-bottom: 50px;
  border-radius: 12px;
  background-color: var(--color-dark-blue);
  box-shadow: -22px 24px 9px 0px rgba(29, 30, 32, 0.22);
}

.terminal {
  padding: 30px;
  font-size: 20px;
  font-family: "Overpass Mono", "Ubuntu Mono", monospace;
}
.terminal .bottom {
  margin-top: 20px;
  gap: 20px;
}
.terminal .tux {
  width: 95px;
  object-fit: contain;
}
.terminal-mode-btn {
  cursor: pointer;
  font-size: 16px;
}
.terminal-mode-btn:hover {
  color: var(--color-blue);
}

.terminal > p {
  /* white-space: nowrap; */
  /* overflow: hidden; */
  /* border-right: 0.15em solid #fff; */
  /* animation: typing 8s steps(50) forwards; */
}

.jump {
  animation: jump 0.5s ease;
}

@keyframes jump {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes typing {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

/* @media screen and (max-width: 850px) {
  .terminal {
    width: 80%;
  }
} */
@media (max-width: 700px) {
  .hero h1 {
    font-size: 50px;
  }

  .hero > p {
    font-size: 20px;
  }
  .row {
    flex-direction: column;
  }
  .terminal {
    font-size: 12px;
  }
  .terminal-mode-btn {
    display: none;
  }
}
</style>
