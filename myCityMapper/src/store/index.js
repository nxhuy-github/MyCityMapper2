import Vue from 'vue'
import Vuex from 'vuex'
import addresses from './modules/addresses'
import line from './modules/line'
import journey from './modules/journey'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    addresses,
    journey,
    line
  }
})
