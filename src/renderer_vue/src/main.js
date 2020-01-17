import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import "@/plugins/vee-validate.js";
import "@/plugins/input-tag.js";
import "@/plugins/vue-clipboard.js";

import "@/assets/css/base.css";
import "@/assets/css/page.css";
import "@/assets/css/note.css";

window.localForage = require("localforage");

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
