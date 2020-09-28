import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isBlack: false
  },
  mutations: {
    changeBlack (state, data) {
      state.isBlack = data
    }
  },
  actions: {
  },
  modules: {
  }
})
