import { createApp } from "vue";
import "./styles/global.css";
import App from "./App.vue";
import { pinia } from "./store/store";
import { createI18n } from "vue-i18n";

const app = createApp(App);
app.use(pinia);

const i18n = createI18n({
  locale: "en",
  messages: {
    en: {
      message: {
        hello: "hello world",
      },
    },
    fr: {
      message: {
        hello: "Bonjour le monde",
      },
    },
    ar: {
      message: {
        hello: "مرحبا بالعالم",
      },
    },
  },
});
app.use(i18n);

app.mount("#app");
