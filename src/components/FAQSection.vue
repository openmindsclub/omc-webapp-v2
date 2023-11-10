<script setup>
import { ref } from "vue";
import Title from "./Title.vue";

const list = ref([
  {
    question: "Why is Webflow the best nocode tool?",
    answer:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
    isOpen: true,
  },
  {
    question: "How to launch a Webflow website?",
    answer:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
    isOpen: false,
  },
  {
    question: "When did Webflow was founded?",
    answer:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
    isOpen: false,
  },
  {
    question: "Who founded BRIX Templates?",
    answer:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
    isOpen: false,
  },
  {
    question: "Who are the Webflow founders?",
    answer:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
    isOpen: false,
  },
  {
    question: "Is NoCode the future of the web?",
    answer:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
    isOpen: false,
  },
]);

function toggleAnswer(item) {
    item.isOpen = !item.isOpen;
}
</script>

<template>
  <section class="section faq">
    <Title class="title" text=">FAQ_⁉️" number="8" color="#fff"></Title>

    <div class="row d-flex fl-j-sb">
      <div class="cards">
        <div class="card" v-for="item in list.slice(0, list.length / 2)">
          <div class="d-flex fl-j-sb">
            <h3>{{ item.question }}</h3>
            <button @click="toggleAnswer(item)">
              <img v-if="!item.isOpen" src="../assets/svg/plus.svg" alt="" />
              <img v-else src="../assets/svg/minus.svg" alt="" />
            </button>
          </div>
          <p v-if="item.isOpen">
            {{ item.answer }}
          </p>
        </div>
      </div>
      <div class="cards">
        <div
          class="card"
          v-for="item in list.slice(list.length / 2, list.length)"
        >
          <div class="d-flex fl-j-sb">
            <h3>{{ item.question }}</h3>
            <button @click="toggleAnswer(item)">
              <img v-if="!item.isOpen" src="../assets/svg/plus.svg" alt="" />
              <img v-else src="../assets/svg/minus.svg" alt="" />
            </button>
          </div>
          <p v-if="item.isOpen">
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.row {
  gap: 30px;
  margin-top: 50px;
}
.card {
  width: 100%;
  max-width: 540px;
  padding: 30px;
  margin-bottom: 30px;
  color: #a1a1a1;
  font-family: Ubuntu Mono;
  font-size: 18px;
  background-color: var(--color-black);
  border-radius: 16px;
}
.card h3 {
  font-size: 24px;
  color: white;
  padding-bottom: 15px;
}
.card button {
  width: 40px;
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  margin-left: 20px;
  cursor: pointer;
}

@media (max-width: 700px) {
  .row {
    flex-direction: column;
  }
}
</style>
