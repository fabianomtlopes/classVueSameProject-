<template>
  <div>
        <ListaDeTarefas />
      
        <div 
        v-if="!$store.state.tarefas.lenght"
        class="mt-16 animate__animated animate__bounceOutUp">
          <center>
          <v-icon size="100" color="primary">
            mdi-check
          </v-icon>
          <div
          class="text-h5 primary--text"
          >
            Nenhuma tarefa
          </div>
          </center>
        </div>
      
  </div>
</template>

<script lang="ts">
import ListaDeTarefas from '@/components/tarefas/ListaDeTarefas.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  components: {
    ListaDeTarefas,
  },

  created() {
    this.$store.commit('buscaTarefas');
  },

});
</script>
