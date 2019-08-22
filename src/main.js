import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(Vuelidate);

firebase.initializeApp({
  apiKey: "AIzaSyA5XrOm8-DPFQMXA_qFQOVu77hJfMoV6Fc",
  authDomain: "sublish.firebaseapp.com",
  databaseURL: "https://sublish.firebaseio.com",
  projectId: "sublish",
  storageBucket: "",
  messagingSenderId: "324162501859",
  appId: "1:324162501859:web:e290df7e2c61e2d0"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
