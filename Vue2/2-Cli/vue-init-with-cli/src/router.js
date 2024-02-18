import Vue from "vue";
import Router from "vue-router";
import Lists from "./components/Lists.vue";
import About from "./components/About.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "skills",
      component: Lists,
    },
    {
      path: "/about/:name",
      name: "about",
      component: About,
    },
  ],
});
