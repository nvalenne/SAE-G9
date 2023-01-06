<template>
  <div class="accueil">
    <div id="map" >
      <SVGMap @StandClick="test"/>
    </div>
    <div>
      <label>{{attractionNom}}</label>
    </div>
  </div>
</template>
<script>
import SVGMap from "@/components/SVGMap";
import {mapState} from "vuex";
export default {
  name: 'CarteView',
  components: {
    SVGMap,
  },
  data(){
    return {
      attractionClicked:[],
    }
  },
  methods: {
    test(rect){
      this.$store.dispatch('getAttractionsFromAPIwithNumEmpla',rect.id);
    },
  },
  computed:{
    ...mapState(['attractionMap']),
    attractionNom(){
      if (this.attractionMap[0] !=null){
        let nom = this.attractionMap[0].nom;
        return nom;
      }
      return "Emplacement libre"
    },

  },
  metaInfo: {
    title: 'Carte interactive - Les Papiots'
  },
}
</script>

