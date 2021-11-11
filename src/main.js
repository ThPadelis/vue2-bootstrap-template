import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";
import VueAxios from "vue-axios";
import Meta from "vue-meta";
import customAxios from "./utils/custom-axios";
import "./utils/filters";

Vue.use(BootstrapVue);
Vue.use(VueAxios, customAxios);
Vue.use(Meta);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
