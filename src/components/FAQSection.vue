<script setup>
import { ref } from "vue";
import Title from "./Title.vue";

const list = ref([
  {
    question: "Open source kezako?",
    answer:
      "This word is so important to our club that it constitutes the very essence of its philosophy, but remains misinterpreted by the majority. The term was originally coined to designate computer software whose source code is open to all and to which anyone can contribute. Today, the concept has become widespread, and refers to the fact of having access to the source of a product's realization: the chemical composition of a drug, the plans for a piece of furniture or a house, the ingredients of a recipe... the source code of a software product...",
    isOpen: true,
  },
  {
    question: "How can I joing the club?",
    answer:
      "You just need to follow us on social media and subscribe to be informed of our latest news and events.",
    isOpen: false,
  },
  {
    question: "How can I contribute to Open Minds Club projects?",
    answer:
      "You can contribute to our projects by participating in our events and sharing your knowledge and skills with the community, by proposing new projects or contributing to existing ones from our GitHub repository.",
    isOpen: false,
  },
  {
    question: "Where is the club located?",
    answer:
      "The Open Minds Club is is located in the CRI at the University of Houari Boumediene, Bab Ezzouar, Algiers, Algeria.",
    isOpen: false,
  },
  {
    question: "What is the meaning of Open Minds Club slogan?",
    answer:
      'The slogan of OMC "Ce qui ne se partage pas se perd " means that knowledge is a treasure that grows when shared. It is a call to share knowledge and skills with the community.',
    isOpen: false,
  },
  // {
  //   question: "Is NoCode the future of the web?",
  //   answer:
  //     "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
  //   isOpen: false,
  // },
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
