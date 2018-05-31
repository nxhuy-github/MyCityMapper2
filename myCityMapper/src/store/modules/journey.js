import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  journeys: [],
  departure: [],
  arrival: []
}

const getters = {
  journeys: state => state.journeys,
  departure: state => state.departure,
  arrival: state => state.arrival
}

const mutations = {
  JOURNEYS (state, journeys) {
    state.journeys = journeys
  },
  ADD_DEPARTURE (state, departure) {
    state.departure = []
    state.departure.push(
      departure
    )
  },
  ADD_ARRIVAL (state, arrival) {
    state.arrival = []
    state.arrival.push(
      arrival
    )
  },
  RESET (state) {
    state.departure = state.arrival = []
  }
}

const actions = {
  journeys ({commit}, journeys) {
    commit('JOURNEYS', journeys)
  },
  departure ({commit}, departure) {
    commit('ADD_DEPARTURE', departure)
  },
  arrival ({commit}, arrival) {
    commit('ADD_ARRIVAL', arrival)
  },
  reset ({commit}) {
    commit('RESET')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
