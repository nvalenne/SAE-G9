<template>
  <div id="app">
    <div class="image">
      <v-img
        :src="require('../../public/manege/manege1.jpg')"
        class="image_principale"
      >
      </v-img>
      <h1 class="titre_fete_foraine">Les Papiots</h1>
      <h2 class="date">Du 1 juillet au 13 juillet 2023 à Belfort</h2>
    </div>
    <div class="text">
      <p>
        La grande fête foraine de l’Ouest de la France, Les Papiots s’installe
        tous les ans pendant près d’un mois, de début décembre à début janvier,
        près du centre-ville de Belfort. À cette occasion, un peu plus de 80
        forains en tous genres (manèges, jeux, boutiques, stands de nourriture)
        sont présents lors de cette grande.
      </p>
      <hr />
    </div>

    <div class="manege">
      <h2 id="titre_troisieme_partie">Une grande variétée de manèges</h2>
      <v-carousel cycle>
        <v-carousel-item
          v-for="(item, i) in imagesManeges"
          :key="i"
          :src="item.src"
        >
        </v-carousel-item>
      </v-carousel>
    </div>
    <h2 id="titre_sponsor">Sponsors</h2>
    <div class="sponsors">
      <div>
        <v-row>
          <v-col
            cols="3"
            v-for="(sponsor, index) in imagesSponsors"
            :key="index"
          >
            <v-card align="center">
              <v-img class="sponsor" :src="sponsor.src"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "AccueilView",

  metaInfo: {
    title: "Accueil - Les Papiots",
  },
  data: () => ({
    imagesManeges: [
      { src: require("../../public/manege/manege4.jpg") },
      { src: require("../../public/manege/manege2.jpg") },
      { src: require("../../public/manege/manege3.jpg")},
      { src: require("../../public/manege/peche_aux_canards.jpg")},
    ],
    imagesSponsors: [
      { src: require("../../public/logo/sponsors/france-3-bourgogne-franche-comte-logo.jpg") },
      { src: require("../../public/logo/sponsors/letudiant.png") },
      { src: require("../../public/logo/sponsors/societe-generale-logo.png") },
      { src: require("../../public/logo/sponsors/Logo_Est_Republicain.svg") },
      { src: require("../../public/logo/sponsors/iutbm.svg")}
    ],
  }),
};
</script>

<style scoped>
.sponsor {
  width: 50%;
  height: 50%;
}
</style>
