
import db from '@/services/localbase'

export default {
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
}