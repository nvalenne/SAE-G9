<template>
  <div class="accueil">
    <div id="map">
      <MapVue/>
    </div>
  </div>
</template>

<script>
import MapVue from "@/components/Map.vue";
export default {
  name: 'CarteView',
  components: {
    MapVue

  },
  metaInfo: {
    title: 'Carte intéractive'
  }
}
</script>

