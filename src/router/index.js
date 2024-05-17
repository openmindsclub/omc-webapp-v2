import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import EventRegistration from "../views/EventRegistration.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Main,
    },
    {
      path: "/omtech",
      name: "omtech",
      component: EventRegistration,
    },
  ],
});

export default router;
