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

    removeTarefa(state, id) {
      state.tarefas = state.tarefas.filter((tarefa) => tarefa.id !== id);
    },

    editaTarefa(state, novaTarefa) {
      const tarefa = state.tarefas.filter((tarefa) => tarefa.id === novaTarefa.id)[0];
      tarefa.titulo = novaTarefa.titulo;
    },
  },
  // serve para otimizar o desenvolvimento
  actions: {
    async adicionaTarefa({ commit }, titulo) {
      await commit('adicionaTarefa', titulo);
      await commit('buscaTarefas');
    },
  },
  modules: {
  },
})
