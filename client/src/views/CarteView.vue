<template>
  <div class="accueil" style="display: flex;column-count: 6">
    <div id="map" >
      <SVGMap @StandClick="clickRect"/>
    </div>
    <div v-if="!actractionisNull" style="margin-left: 30px;margin-top: 20px">
      <v-card elevation="4">
        <v-card-title>{{attractionNom}}</v-card-title>
        <v-img
            max-width="200px"
            src="https://www.petitfute.com/medias/mag/12133/835/8896-les-10-parcs-d-attraction.jpg">
        </v-img>
        <v-card-text>
          <label>{{attractionPrix}}</label>
          <br>
          <label>{{attractionTaille}}</label>
          <br>
          <label>{{attractionAttente}}</label>
          <br>
        </v-card-text>

        <!-- Si il est admin rajouter des infos + bouton pour modifier ?
        <div v-if="admin">

        </div>
-->
      </v-card>
    </div>
    <div v-else>
      <v-btn @click="afficheForm" class="green white--text">
        <v-icon color="red">mdi-add</v-icon>
        <span>Ajouter un nouveau manège</span>
      </v-btn>
      <div v-if="form">
        <AjouterManegeView></AjouterManegeView>
      </div>
    </div>
  </div>
</template>
<script>
import SVGMap from "@/components/SVGMap";
import {mapState} from "vuex";
import AjouterManegeView from "@/views/AjouterManegeView";
export default {
  name: 'CarteView',
  components: {
    AjouterManegeView,
    SVGMap,
  },
  data(){
    return {
      form: false,
      attractionClicked:[],
    }
  },
  methods: {
    afficheForm(){
      this.form= !this.form;
    },
    clickRect(rect){
      this.$store.dispatch('getAttractionsFromAPIwithNumEmpla',rect.id);

    },
  },
  computed:{
    ...mapState(['attractionMap']),
    actractionisNull(){
      return this.attractionMap==null
    },
    attractionNom(){
      return this.attractionMap.nom.toUpperCase();
    },
    attractionPrix(){
      let prixA = this.attractionMap.prix_adulte;
      let prixE = this.attractionMap.prix_enfant;
      return "Prix adulte: "+prixA+"  Prix enfant: "+prixE;
    },
    attractionTaille(){
      return "Taille requise: "+this.attractionMap.taille_requise;
    },
    attractionAttente(){
      return "Attente: "+this.attractionMap.attente+" min"
    }


  },
  metaInfo: {
    title: 'Carte interactive - Les Papiots'
  },
}
</script>

