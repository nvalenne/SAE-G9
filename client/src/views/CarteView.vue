<template>
  <div class="accueil">
    <NavBar/>
    <div id="map">
      <MapVue/>
    </div>
  </div>
</template>

<script>

import NavBar from "@/components/NavBar";
import MapVue from "@/components/Map.vue";
export default {
  name: 'CarteView',
  components: {
    NavBar,
    MapVue

  },
  metaInfo: {
    title: 'Carte intéractive'
  }
}
</script>

