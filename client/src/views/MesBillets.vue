<script>
import { mapState} from 'vuex';
export default {
  name: 'MesBilletsVue',
  metaInfo: {
    title: 'Liste de mes billets'
  },
  data () {
    return {
      search: '',
      attractionSelected:{}
    }
  },
  computed:{
    ...mapState(['billets']),
    filterSearch() {
      return this.billets;
    },
  },
  created() {
    this.$store.dispatch('getBilletsByCompte');
  },
}
</script>

<template>
  <div id="app">
    <v-container>
      <v-row>
        <div class="col-6">
          {{this.billets}}
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>