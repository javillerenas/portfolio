import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faDev, faTwitterSquare, faLinkedin, faGithubSquare, faGithub, faDribbbleSquare, faMedium } from '@fortawesome/free-brands-svg-icons';
library.add(faCoffee, faDev, faTwitterSquare, faLinkedin, faGithubSquare, faGithub, faDribbbleSquare, faMedium);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
