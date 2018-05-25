import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  lines: []
}

const getters = {
  lines: state => state.lines
}

const mutations = {
  LOAD_LINES (state) {
    console.log('Loadlines...!')
    for (let i = 0; i < localStorage.length; i++) {
      let id = localStorage.key(i)
      if (id !== 'loglevel:webpack-dev-server') {
        let obj = {id: id, stops: localStorage.getItem(id)}
        state.lines.push(obj)
      }
    }
  },
  ADD_LINE (state, line) {
    let obj = {id: line.id, stops: line.stops}
    state.lines.push(obj)
    localStorage.setItem(line.id, JSON.stringify(line.stops))
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
