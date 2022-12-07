<template>
  <div id="app">
    <NavBar/>
      <div class="image">
        <v-img :src="require('../../public/manege/manege1.jpg')" class="image_principale">
        </v-img>
        <h1 class="titre_fete_foraine">Les Papiots</h1>
        <h2 class="date">Du 1 juillet au 31 août à Belfort</h2>
      </div>
    <div class="text">
      <p>La grande fête foraine de l’Ouest de la France, Les Papiots s’installe tous les ans pendant près d’un mois, de début décembre à début janvier, près du centre-ville
        de Belfort. À cette occasion, un peu plus de 80 forains en tous genres (manèges, jeux, boutiques, stands de nourriture) sont présents lors de cette
        grande.</p>
      <hr>
    </div>

    <div class="manege">
      <h2 id="titre_troisieme_partie">Une grande variétée de manèges</h2>

      <v-app id="inspire">
      <v-carousel cycle>
        <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src">
        </v-carousel-item>
      </v-carousel>
    </v-app>
      <hr>
    </div>

    <div class="sponsor">
      <h2 id="titre_sponsor">Sponsors</h2>
    </div>


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
          src: require("../../public/manege/manege4.jpg")
        },
        {
          src: require("../../public/manege/manege2.jpg")
        },
        {
          src: require("../../public/manege/manege3.jpg")
        },
        {
          src: require("../../public/manege/peche_aux_canards.jpg")
        }
      ],
    }
  },
}
</script>

<style>

</style>
