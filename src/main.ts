import Vue from "vue";
import App from "./App.vue";
import fontawesome from '@fortawesome/fontawesome';
import { fas } from '@fortawesome/fontawesome-free-solid';
import { fab } from '@fortawesome/fontawesome-free-brands';
import { far } from '@fortawesome/fontawesome-free-regular';

fontawesome.library.add(fas, fab, far);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
