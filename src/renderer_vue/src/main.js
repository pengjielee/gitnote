import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import "@/assets/css/base.css";
import "@/assets/css/note.css";

import "@/plugins/vee-validate.js";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
