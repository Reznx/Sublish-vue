import firebase from "firebase/app";

export default {
  state: {
    isAuthenticated: false
  },
  mutations: {
    setUser(state, payload) {
      state.isAuthenticated = payload;
    }
  },
  actions: {
    async register({ dispatch, commit }, { email, password, name }) {
      try {
        commit("setProcessing", true);
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch("getUid");
        await firebase
          .database()
          .ref(`/users/${uid}/info`)
          .set(name);
        commit("setUser", true);
        commit("setProcessing", false);
      } catch (e) {
        commit("setError", e);
        commit("setProcessing", false);
        throw e;
      }
    },
    async login({ commit }, { email, password }) {
      try {
        commit("setProcessing", true);
        await firebase.auth().signInWithEmailAndPassword(email, password);
        commit("setUser", true);
        commit("setProcessing", false);
      } catch (e) {
        commit("setError", e);
        commit("setProcessing", false);
        throw e;
      }
    },
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    async logout({ commit }) {
      await firebase.auth().signOut();
      commit("setUser", false);
    }
  },
  getters: {
    isUserAuthenticated: s => s.isAuthenticated
  }
};
