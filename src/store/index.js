import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import general from "./general";
import games from "./games";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    general,
    games
  }
});
