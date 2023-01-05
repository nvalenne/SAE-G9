<script>
import {mapState} from 'vuex';
export default {
  name: 'ListeManegeView',
  metaInfo: {
    title: 'Liste des manèges - Les Papiots'
  },
  data () {
    return {
      search: '',
      search2: '',
    }
  },
  computed:{
    ...mapState(['attractions']),
    filterSearch() {
      let filter = this.attractions.filter(attraction => attraction.nom.includes(this.search));
      //console.log(Array.isArray(this.attractions), this.attractions);
      if (filter.length !== 0)
        return filter;
      else return this.attractions;
    },
    ...mapState(['stands']),
    filterSearch2() {
      let filter = this.stands.filter(stand => stand.nom.includes(this.search2));
      //console.log(Array.isArray(this.attractions), this.attractions);
      if (filter.length !== 0)
        return filter;
      else return this.stands;
    },
  },
  created() {
    this.$store.dispatch('getAttractionsFromAPI');
    this.$store.dispatch('getStandsFromAPI');
  }
}
</script>

<template>
  <div id="app">
    <v-container>
      <div class="accueil">
        <h1>Liste des manèges</h1>
      </div>
      <v-btn depressed color="primary">
        <router-link to="/modifier_manege">
          <span class="boutton">Modifier</span>
        </router-link>
      </v-btn>
      <v-app id="inspire">
        <v-text-field
            style="width: 50%;max-height: 32px;margin-bottom: 30px;"
            v-model="search"
            append-icon="mdi-magnify"
            label="Recherche"
        ></v-text-field>
        <div>
          <div v-for="(attraction, index) in filterSearch" :key="index">
            <a @click="$router.push(`/liste_manege/${attraction.id_attraction}`)">
              <v-card elevation="4" class="mb-3">
                <v-card-text>
                  <v-card-title>{{attraction.nom}}</v-card-title>
                  <v-img
                      max-width="200px"
                      src="https://www.petitfute.com/medias/mag/12133/835/8896-les-10-parcs-d-attraction.jpg"
                  ></v-img>
                  <span>Propriétaire : {{attraction.compte.nom}} {{attraction.compte.prenom}}</span><br>
                  <span>Type d'attraction : {{attraction.type_attraction.designation}}</span>
                </v-card-text>
              </v-card>
            </a>
          </div>
        </div>

      </v-app>
    </v-container>
    <v-container>
      <div class="accueil">
        <h1>Liste des stands</h1>
      </div>
      <v-btn depressed color="primary">
        <router-link to="/modifier_stand">
          <span class="boutton">Modifier</span>
        </router-link>
      </v-btn>
      <v-app id="inspire">
        <v-text-field
            style="width: 50%;max-height: 32px;margin-bottom: 30px;"
            v-model="search2"
            append-icon="mdi-magnify"
            label="Recherche"
        ></v-text-field>
        <div>
          <div v-for="(stand, index) in filterSearch2" :key="index">
            <a @click="$router.push(`/liste_manege/${stand.id_stand}`)">
              <v-card elevation="4" class="mb-3">
                <v-card-text>
                  <v-card-title>{{stand.nom}}</v-card-title>
                  <v-img
                      max-width="200px"
                      src="https://www.petitfute.com/medias/mag/12133/835/8896-les-10-parcs-d-attraction.jpg"
                  ></v-img>
                  <span>Propriétaire : {{stand.compte.nom}} {{stand.compte.prenom}}</span><br>
                  <span>Type de stand : {{stand.type_stand.designation}}</span>
                </v-card-text>
              </v-card>
            </a>
          </div>
        </div>

      </v-app>
    </v-container>
  </div>
</template>

<style scoped>
  .boutton{
    color: white;
  }
  a {
    text-decoration: none;
  }
</style>