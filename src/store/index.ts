import { createStore } from 'vuex'

export default createStore({
  state: {
    overlay: false
  },
  mutations: {
    SET_OVERLAY_ACTIVE(state, val) {
      state.overlay = val
    }
  },
  actions: {
    setOverlayActive({commit}, val) {
      console.log('setting overlay active: ', val)
      commit('SET_OVERLAY_ACTIVE', val)
    }
  },
  modules: {
  }
})
