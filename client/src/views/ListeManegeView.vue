<script>
import {mapState} from 'vuex';
import axios from "axios";
export default {
  name: 'ListeManegeView',
  metaInfo: {
    title: 'Liste des manèges - Les Papiots'
  },
  data () {
    return {
      search: '',
    }
  },
  computed:{
    ...mapState(['attractions']),
  },
  created() {
    this.$store.dispatch('getAttractionsFromAPI');
  }
}
</script>

<template>
  <div id="app">
    <div class="accueil">
      <h1>Liste des manèges</h1>
    </div>
    <v-btn depressed color="primary">
      <router-link to="/modifier_manege">
        <span class="boutton">Modifier</span>
      </router-link>
    </v-btn>
    <v-app id="inspire">
      <v-card v-for="(attraction, index) in attractions" :key="index">
        <v-card-title>
          {{attraction}}
          <v-card-text>
            <h1>{{attraction.nom}}</h1>
          </v-card-text>
          <!--
          <v-spacer></v-spacer>
          <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
          ></v-text-field>

         -->
        </v-card-title>
      </v-card>
    </v-app>
  </div>
</template>

<style scoped>
  .boutton{
    color: white;
  }
</style>