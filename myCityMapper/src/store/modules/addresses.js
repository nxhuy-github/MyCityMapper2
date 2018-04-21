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
  }],
  counter: 4,
  departure: [{name: 'Paris', address: 'ABC XYZ', favorite: false }],
  arrival: [{name: 'Sai Gon', address: 'HCJ XYZ', favorite: false }]
}

const getters = {
  addresses: state => state.addresses,
  counter: state => state.counter,
  departure: state => state.departure,
  arrival: state => state.arrival
}

const mutations = {
  ADD_ADDRESS (state, address) {
    state.addresses.push(
      address
    )
    state.counter = state.counter + 1
  },
  ADD_DEPARTURE (state, departure) {
    state.departure.push(
      departure
    )
    state.counter = state.counter + 1
  },
  ADD_ARRIVAL (state, arrival) {
    state.arrival.push(
      arrival
    )
    state.counter = state.counter + 1
  },
  DELETE_ADDRESS (state, id) {
    state.addresses.splice(id.id, 1)
    state.counter = state.counter - 1
  }
}

const actions = {
  addAddress ({commit}, address) {
    commit('ADD_ADDRESS', address)
  },
  departure ({commit}, departure) {
    commit('ADD_DEPARTURE', departure)
  },
  arrival ({commit}, arrival) {
    commit('ADD_ARRIVAL', arrival)
  },
  deleteAddress ({commit}, id) {
    commit('DELETE_ADDRESS', id)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
