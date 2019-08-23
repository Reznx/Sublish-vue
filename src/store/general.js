export default {
  state: {
    processing: false,
    error: null
  },
  mutations: {
    setProcessing(state, payload) {
      state.processing = payload;
    },
    setError(state, error) {
      state.error = error;
    },
    cleanError(state) {
      state.error = null;
    }
  },
  getters: {
    getProccesing: s => s.processing,
    getError: s => s.error
  }
};
