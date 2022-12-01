<template>
  <div id="app">
    <NavBar/>
    <v-app id="inspire">
      <v-carousel>
        <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src">
        </v-carousel-item>
      </v-carousel>
    </v-app>
  </div>
</template>


<script>

import NavBar from "@/components/NavBar";


export default {

  name: 'AccueilView',
  components : {
    NavBar
  },

  metaInfo: {
    title: 'Accueil'
  },
  data: function () {
    return {
      items: [
        {
          src: require("../../public/manege4.jpg")
        },
        {
          src: require("../../public/manege2.jpg")
        },
        {
          src: require("../../public/manege3.jpg")
        },
        {
          src: require("../../public/manege1.jpg")
        }
      ],
    }
  },
}
</script>

<style>
  
</style>
