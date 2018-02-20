import Vue from 'vue'
import Vuex from 'vuex'
import addresses from './modules/addresses'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    addresses
  }
})
