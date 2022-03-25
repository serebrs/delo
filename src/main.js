import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import HintBox from "./components/utils/HintBox.vue";
import "./assets/app.css";

createApp(App)
  .use(store).use(router)
  .component("HintBox", HintBox)
  .mount("#app");
