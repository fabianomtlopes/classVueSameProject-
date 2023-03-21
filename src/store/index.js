import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,

  getters: {
  },
  // pode fazer algo com o state, editar
  mutations,
  // serve para otimizar o desenvolvimento e dispatch  nos componentes serve para agir a action no Vuex, store->index.js
  actions,

  modules: {
  },
})
