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
      <div v-for="(billet, index) in this.billets" :key="index">
        <div>
          <v-card elevation="4" class="mb-3">
            <v-card-text>
              <span>Date : {{billet.date_billet}}</span><br>
              <span>Prix : {{billet.prix}}€</span><br>
              <span>Attraction : {{billet.id_attraction}}</span><br>
            </v-card-text>
          </v-card>
        </div>
      </div>
      <router-link :to="{name:'/acheter'}">
        <v-btn depressed color="primary">Acheter</v-btn>
      </router-link>
    </v-container>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>