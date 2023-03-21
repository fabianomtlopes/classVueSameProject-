import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import Localbase from 'localbase'

const db = new Localbase('db')

export default new Vuex.Store({
  state: {
    tarefas: [
      // { id: 1, titulo: 'Ir ao mercado', concluido: false },
      // { id: 2, titulo: 'Comprar ração', concluido: false },
    ],
  },
  getters: {
  },
  // pode fazer algo com o state, editar
  mutations: {
    buscaTarefas(state) {
      db.collection('tarefas').get().then((tarefasDB) => {
        state.tarefas = tarefasDB;
      });
    },

    adicionaTarefa(state, titulo) {
      db.collection('tarefas').add({
        id: new Date().getTime(),
        titulo,
        concluido: false,
      });
    },
  },
  // serve para otimizar o desenvolvimento
  actions: {
    async adicionaTarefa({ commit }, titulo) {
      await commit('adicionaTarefa', titulo);
      await commit('buscaTarefas');
    },

    editaTarefa({commit}, novaTarefa){
      db.collection('tarefas').doc({ id: novaTarefa.id}).update({
        titulo: novaTarefa.titulo
      }).then(()=>{commit('buscaTarefas')
    })
    },

    removeTarefa({commit}, id){
      db.collection('tarefas').doc({ id }).delete().then(()=>{
        commit('buscaTarefas')
      })
    }
  },
  modules: {
  },
})
