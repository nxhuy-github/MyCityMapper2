import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  addresses: [{
    name: 'Maison',
    address: '34 rue Bolivar, 69005, Lyon',
    favorite: true
  }, {
    name: 'Travail',
    address: '43, bd du 11 novembre 1918, 69622 Villeurbanne cedex',
    favorite: true
  }, {
    name: 'Nautibus',
    address: '43, bd du 11 novembre 1918, 69622 Villeurbanne cedex',
    favorite: false
  }, {
    name: 'AML',
    address: '43, bd du 11 novembre 1918, 69622 Villeurbanne cedex',
    favorite: false
  }]
}

const getters = {
  addresses: state => state.addresses
}

const mutations = {
  ADD_ADDRESS (state, address) {
    state.addresses.push(
      address
    )
  }
}

const actions = {
  addAddress ({commit}, address) {
    commit('ADD_ADDRESS', address)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
