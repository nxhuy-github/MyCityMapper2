import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  id: null,
  stops: []
}

const getters = {
  id: state => state.id,
  stops: state => state.stops
}

const mutations = {
  LOAD_LINES (state) {
    console.log('Loadlines...!')
  },
  ADD_LINE (state, line) {
    state.id = line.id
    state.stops = line.stops
    localStorage.setItem(state.id, JSON.stringify(state.stops))
  }
}

const actions = {
  loadLines ({commit}) {
    commit('LOAD_LINES')
  },
  addLine ({commit}, line) {
    commit('ADD_LINE', line)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
