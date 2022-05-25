import { createApp } from "vue";
import App from "./App.vue";
import store from "./components/vuex/store";
import "material-design-icons-iconfont";
// import "./assets/styles/styles.scss";

createApp(App).use(store).mount("#app");
