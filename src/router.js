import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      meta: { layout: "empty" },
      component: () => import("./views/Login.vue")
    },
    {
      path: "/register",
      name: "register",
      meta: { layout: "empty" },
      component: () => import("./views/Register.vue")
    },
    {
      path: "/",
      name: "home",
      meta: { layout: "main" },
      component: () => import("./views/Home.vue")
    },
    {
      path: "/messages",
      name: "messages",
      meta: { layout: "main" },
      component: () => import("./views/Messages.vue")
    },
    {
      path: "/friends",
      name: "friends",
      meta: { layout: "main" },
      component: () => import("./views/Friends.vue")
    },
    {
      path: "/list",
      name: "list",
      meta: { layout: "main" },
      component: () => import("./views/List.vue")
    }
  ]
});
