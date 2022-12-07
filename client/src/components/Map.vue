<template>
    <div id="map">
        <SVGMap/>        
    </div>
</template>
<script>
import SVGMap from './SVGMap.vue';
export default {
    name: "MapVue",
    components: {
        SVGMap
    }
}
</script>
<style scoped>
#map {
  display: flex;
  justify-content:left;
  margin-top: 10px;
}
</style>