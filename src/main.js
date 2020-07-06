import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Icon } from 'vant';
import { Search } from 'vant';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css';
import { Grid, GridItem } from 'vant';

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VueAwesomeSwiper)
Vue.use(Search);
Vue.use(Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
