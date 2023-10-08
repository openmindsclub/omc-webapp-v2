<script setup>


</script>

<template>
  <div class="text">
    <h1>Open Minds Club</h1>
    <p>Where Open Source Minds Come Together.</p>
        <div class="btns">
            <button class="reg-btn">Register Now <img src="../Images/ArrowRight.svg" alt=""/></button>
            <button class="dis-btn">Join  Discord<img src="../Images/discord.svg" alt=""/></button>
        </div>
        <div class="terminal">
             <p>
              [user @openminds]$ hi again welcome in omc website if u want to that aims to hilk pro
              the spirit of collaboration between students, sharing knowledge,the Free Open Source Philosophy inside and outside again w
             </p>
        </div>
  </div>
</template>

<style scoped>

.text {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  margin-top: 40px;
  text-align: center;
}

.text h1 {
  font-size: 60px;
  font-weight: 700;
  background: linear-gradient(92deg, #3173BB 5.52%, #007AFF 113.52%);
  -webkit-background-clip: text;
  color: transparent;
  line-height: 140%;
  max-width: 100%;
}

.text p {
  font-size: 30px;
  font-weight: 400;
  line-height: 130%;
  max-width: 100%;
  margin-top: 20px;
}

.text .btns {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
}

.text .btns button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 45px;
  margin: 10px;
}

.reg-btn {
  color: #fff;
  background: none;
  border-radius: 6px;
  border: 1px solid #3173BB;
}

.dis-btn {
  color: #fff;
  background: none;
  border: none;
  border-radius: 6px;
  background: var(--gradiant-omc, linear-gradient(92deg, #3173BB 5.52%, #007AFF 113.52%));
  box-shadow: 0px 18px 61px -12px rgba(34, 117, 207, 0.19);
}

.reg-btn img,
.dis-btn img {
  width: 24px;
  height: 24px;
  margin-left: 4px;
}

.terminal {
  margin-top: 60px;
  width: 720px;
  height: 370px;
  background-image: url(../Images/shell.svg);
  background-repeat: no-repeat;
  background-size: cover;
}

.terminal p {
  margin-top: 70px;
  margin-left: 3%;
  margin-right: 2%;
  color: #fff;
  font-size: 20px;
  width: auto;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  border-right: .15em solid #fff;
  animation: typing 8s steps(50) forwards;
}

@keyframes typing {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
@media screen and (max-width: 850px) {
  .terminal {
    width: 80%;
  }
}
@media (max-width: 500px) {
  .text h1 {
    font-size: 48px;
  }

  .text p {
    font-size: 24px;
  }
}


</style>
