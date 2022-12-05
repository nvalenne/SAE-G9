<template>
  <div id="app">
    <NavBar/>
    <v-img :src="require('../../public/manege1.jpg')" id="image_principale">
      <h1 id="titre_fete_foraine">Les Papiots</h1>
      <h2 id="date">Du 1 juillet au 31 août</h2>
    </v-img>

    <p>La grande fête foraine de l’Ouest de la France, les papiots s’installe tous les ans pendant près d’un mois, de début décembre à début janvier, près du centre-ville
      de Belfort. À cette occasion, un peu plus de 80 forains en tous genres (manèges, jeux, boutiques, stands de nourriture) sont présent lors de cette
      grande.</p>











    <v-app id="inspire">
      <v-carousel cycle>
        <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src">
        </v-carousel-item>
      </v-carousel>
      <hr>
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
