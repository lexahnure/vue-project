import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const SET_USER = 'SET_USER'
const CLEAR_USER = 'CLEAR_USER'

export default new Vuex.Store({
  state: {
    word: 'Nigga',
    user: null
  },
  mutations: {
    [SET_USER] (state, user) {
      state.user = user
    },
    [CLEAR_USER] (state) {
      state.user = null
    }
  },
  actions: {
    login ({ commit }, data) {
      commit(SET_USER, data)
    },
    logout ({ commit }) {
      commit(CLEAR_USER)
    }
  }
})
