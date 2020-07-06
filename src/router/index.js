import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/Home/Home.vue");
const City = () => import("../views/city/city.vue");
const Detail = () => import("../views/detail/detail.vue")

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/city",
    name: "City",
    component: City
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail
  }
];

const router = new VueRouter({
  routes,
  mode:'history'
});

export default router;
