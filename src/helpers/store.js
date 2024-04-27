import { useAppStore } from "../store/store";


export function setTerminalMode(val) {
    const appStore = useAppStore();
    appStore.setTerminalMode(val);
}