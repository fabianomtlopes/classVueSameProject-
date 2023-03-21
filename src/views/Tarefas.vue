<template>
  <div>

         <v-col
          cols="12"
        >
          <v-text-field
            v-model="campoInput"
            label="Qual sua tarefa?"
            outlined
            clearable
            @keyup.enter="handleAddTarefa"
          ></v-text-field>
        </v-col>
    <ListaDeTarefas />
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
  data() {
    return {
      campoInput: null,
    };
  },

  created() {
    this.$store.commit('buscaTarefas');
  },

  methods: {
    handleAddTarefa() {
      // this.$store.commit('adicionaTarefa', this.campoInput);
      this.$store.dispatch('adicionaTarefa', this.campoInput);
      this.campoInput = null;
    },
  },
});
</script>
