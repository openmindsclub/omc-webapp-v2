<script setup></script>

<template>
  <section class="section hero d-flex fl-col fl-j-c fl-a-c">
    <h1>Open Minds Club</h1>
    <p>Where Open Source Minds Come Together.</p>

    <div class="btns d-flex fl-j-c fl-a-c row">
      <a href="#" target=”_blank” class="reg-btn d-flex fl-a-c fl-j-c">
        <span>Register Now </span><img src="../Images/ArrowRight.svg" alt="" />
      </a>
      <a href="https://discord.gg/EXStpgZM" target=”_blank” class="dis-btn d-flex fl-a-c fl-j-c">
        <span>Join Discord</span><img src="../Images/discord.svg" alt="" />
      </a>
    </div>

    <div class="terminal-wrapper">
      <div class="top-bar d-flex fl-a-c">
        <button class="close"></button>
        <button class="minimize"></button>
        <button class="maximize"></button>
      </div>
      <div class="terminal">
        <p>
          [user @openminds]$ hi again welcome in omc website if u want to that
          aims to hilk
        </p>
        <p>pro the spirit of collaboration between students, sharing knowledge,the
          Free Open Source Philosophy inside and outside again w</p>
        <div class="bottom d-flex fl-col fl-a-c fl-j-c">
          <img class="tux" src="../assets/svg/tux.svg" alt="" srcset="">
          <p class="terminal-mode-btn">[Click for a Terminal Experience]</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  color: white;
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

.hero .btns a {
  height: 48px;
  gap: 10px;
  padding: 0 40px;
  border-radius: 6px;
  font-size: 20px;
  border: 2px solid #3173bb;
  cursor: pointer;
  color: #fff;
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
}

.terminal-wrapper {
  margin-top: 50px;
  width: 100%;
  max-width: 850px;
  border-radius: 12px;
}
.top-bar {
  height: 48px;
  background-color: #13181e;
  border-radius: 12px 12px 0 0;
  padding: 0 20px;
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

.terminal {
  padding: 30px;
  font-size: 20px;
  font-family: 'Overpass Mono', 'Ubuntu Mono', monospace;
}
.terminal .bottom {
  margin-top: 20px;
  gap: 20px;
}
.terminal .tux {
  width: 95px;
  object-fit: contain;
}
.terminal .terminal-mode-btn {
  cursor: pointer;
  font-size: 16px;
}

.terminal > p {
  /* white-space: nowrap; */
  /* overflow: hidden; */
  /* border-right: 0.15em solid #fff; */
  /* animation: typing 8s steps(50) forwards; */
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
  .top-bar {
    height: 26px;
  }
  .top-bar button {
    width: 7px;
    height: 7px;
  }
  .terminal-mode-btn {
    display: none;
  }
}
</style>
