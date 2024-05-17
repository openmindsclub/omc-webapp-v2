<script setup>
import Title from "./Title.vue";
</script>

<template>
  <section class="footer flex flex-col justify-center items-center">
    <Title class="title" text="" number="8" color="#f8ae28"></Title>
    <h1 class="title">Where Open Source Minds Come Together.</h1>
    <footer class="slogan">Made with <span>&#10084;</span> by OMC</footer>
  </section>
</template>

<style scoped>
.footer {
  padding: 10px;
  color: white
}
.title {
  color: white;
  font-size: 38px;
}
.row {
  gap: 30px;
  margin-top: 50px;
}
.slogan {
  color: #f8ae28;
  padding: 20px;
}
.slogan span {
  color: red;
}

@media (max-width: 700px) {
  .title {
    font-size: 18px;
  }
}
</style>
