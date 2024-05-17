<template>
  <nav class="navbar">
    <img class="logo" :src="omclogo" alt="" />
    <img
      class="toggle"
      v-if="!isOpen"
      src="../Images/open.svg"
      alt="Menu"
      @click="toggleMenu"
    />
    <img
      class="toggle"
      v-else
      src="../Images/close.svg"
      alt="Close"
      @click="toggleMenu"
    />
    <ul class="d-flex fl-a-c menu" :class="{ open: isOpen }">
      <li>
        <select v-model="$i18n.locale">
          <option
            v-for="locale in $i18n.availableLocales"
            :key="`locale-${locale}`"
            :value="locale"
          >
            {{ locale }}
          </option>
        </select>
      </li>
      <li>
        <a href="#about"><span>{{ $t('button-about') }}</span> <img :src="Hand" alt="" /></a>
      </li>
      <li>
        <a href="#events"><span>{{ $t('button-events') }}</span> <img :src="Events" alt="" /></a>
      </li>
      <li>
        <a href="#activities"
          ><span>{{ $t('button-projects') }}</span> <img :src="Pazel" alt=""
        /></a>
      </li>
      <!-- <li>
        <a href="#FAQ"><span>FAQ</span> <img :src="Qst" alt="" /></a>
      </li> -->
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  /* height: 95px; */
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
  z-index: 99;
}

ul {
  list-style-type: none;
}
.logo {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 60px;
}

ul {
  width: 100%;
  margin: 20px;
  padding-left: 50%;
  justify-content: right;
  align-items: center;
  gap: 25px;
}
li, select {
  white-space: nowrap;
  position: relative;
  display: flex;
  align-items: center;
  /* padding: 25px; */
  font-size: 20px;
  font-weight: 500;
  color: #fff;
}
li a {
  display: flex;
}
li img {
  /* display: inline; */
  height: 20px;
}

span {
  padding-right: 10px;
}

.toggle {
  width: 60px;
  display: none;
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 999;
}

li::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 0px;
  height: 2px;
  background-color: transparent;
  transition: ease-in 0.4s;
}

li:hover::after {
  background-color: #e82b1f;
  width: 50%;
}

select, option {
  padding: 0 5px;
  border-radius: 4px;
  /* color: var(--color-blue); */
  background-color: var(--color-dark-blue);
}

@media (max-width: 950px) {
  li:hover {
    color: #e82b1f;
  }
  ul {
    height: 0;
    padding: 0;
    /* width: 0; */
    /* padding: 20px; */
    overflow: hidden;
  }
  ul.open {
    height: 220px;
    /* margin: 0; */
    /* display: flex; */
    flex-direction: column;
    /* padding: 40px 20px; */
    z-index: 99;
    /* background-color: var(--color-dark-blue); */
  }
  li {
    text-align: left;
  }
  li::after {
    width: 0;
    height: 0;
  }
  .toggle {
    display: block;
  }
}
/* @media (max-width: 400px) {
  .right-part {
    left: 43%;
  }
} */
</style>

<script>
import omclogo from "../assets/svg/omc-logo.svg";
import Hand from "../Images/Hand.svg";
import Events from "../Images/Event.svg";
import Qst from "../Images/Qst.svg";
import Pazel from "../Images/Pazel.svg";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      omclogo: omclogo,
      Qst: Qst,
      Events: Events,
      Pazel: Pazel,
      Hand: Hand,
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
});
</script>
