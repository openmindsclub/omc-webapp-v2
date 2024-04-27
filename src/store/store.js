import { createPinia, defineStore } from 'pinia';

export const pinia = createPinia();

export const useAppStore = defineStore('app', {
  state: () => ({
    terminalMode: false,
    currentSection: 0,
    locale: "en",
  }),
  actions: {
    setTerminalMode(mode) {
      this.terminalMode = mode;
      this.currentSection = 0;
    },
    setCurrentSection(index) {
      this.currentSection = index;
    }
  },
});
