<template>
    <nav class="navbar">
      <img :src="omclogo" alt="" />
      <div class="menu-toggle" @click="toggleResponsiveMenu">
        <img id="icon" v-if="!isResponsive" src="../Images/open.svg" alt="Menu" />
        <img id="icon" v-else src="../Images/close.svg" alt="Close" />
        <ul class="right-part" :class="{ 'open': isResponsive }">
          <li><span>Home</span></li>
          <li><span class="active">About Us</span> <img :src="Hand" alt="" /></li>
          <li><span>Events</span> <img :src="Events" alt="" /></li>
          <li><span>Projects</span> <img :src="Pazel" alt="" /></li>
          <li><span>FAQ</span> <img :src="Qst" alt="" /></li>
        </ul>
      </div>
    </nav>
  </template>
  

  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    height: 95px;
    align-items: center;
    margin-left: 5%;
    margin-right: 5%;
    width: auto;
  }

  .right-part {
    display: flex;
  }

  .right-part li {
    display: flex;
    list-style: none;
    padding: 25px;
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    position: relative;
  }

  span {
    padding-right: 10px;
  }

  .active {
    width: 96.5px;
  }
  .menu-toggle #icon{
     display: none;
  }

  li::after {
    content: "";
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: 0px;
    height: 2px;
    background-color: transparent;
    transition: ease-in 0.4s;
  }

  li:hover::after {
    background-color: #e82b1f;
    width: 30%;
  }

  .menu-toggle {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    color: #fff;
  }

  .menu-toggle div {
    display: flex;
    align-items: center;
  }

  @media (max-width: 950px) {
    li:hover {
      color: #e82b1f;
    }
    .menu-toggle {
        margin: 0;
        padding: 0;
    }
    .right-part {
     position: fixed;
    top: 90px;
    right: 0;
    bottom: 0;
    left: 50%;
    background-color: #04090F;
    list-style: none;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    transform: translateX(100%);
    transition: transform 1.2s ease-in-out;
  }
  .right-part.open {
    transform: translateX(0);
  }
  li {
    text-align: left;
  }
  li::after {
    width:0;
    height: 0;
  }
    .menu-toggle #icon{
        display: flex;
        width: 60px;
        height: 60px;
        transition: transform 1.2s ease;
    }
  }
  @media (max-width: 400px) { 
    .right-part { 
      left: 43%;
    }
  }
</style>
  
  <script>
  import omclogo from '../../public/omc-logo.svg';
  import Hand from '../Images/Hand.svg';
  import Events from '../Images/Event.svg';
  import Qst from '../Images/Qst.svg';
  import Pazel from '../Images/Pazel.svg';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        omclogo: omclogo,
        Qst: Qst,
        Events: Events,
        Pazel: Pazel,
        Hand: Hand,
        isResponsive: false,
      };
    },
    methods: {
      toggleResponsiveMenu() {
        this.isResponsive = !this.isResponsive;
      },
    },
  });
  </script>
  