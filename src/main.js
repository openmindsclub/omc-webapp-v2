import { createApp } from "vue";
import "./styles/global.css";
import App from "./App.vue";
import { pinia } from "./store/store";
import { createI18n } from "vue-i18n";
import EN from "./lang/en.json";
import FR from "./lang/fr.json";
import AR from "./lang/ar.json";
import router from "./router";
import "./styles/tailwind.css"

const app = createApp(App);
app.use(pinia);

const i18n = createI18n({
  locale: "en",
  messages: {
    en: EN,
    fr: FR,
    // ar: AR,
  },
});
app.use(i18n);
app.use(router);

app.mount("#app");
