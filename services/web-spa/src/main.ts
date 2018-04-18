import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import system from "vue-design-system";
import "vue-design-system/dist/system/system.css";

Vue.config.productionTip = false;
Vue.use(system);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
