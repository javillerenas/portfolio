import Vue from "vue";
import App from "./App.vue";
import fontawesome from '@fortawesome/fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';

fontawesome.library.add(faUser)
fontawesome.library.add(faFacebook)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
