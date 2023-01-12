<template>
  <div class="app">
    <div>
      <router-link to="/maneges">
        <v-btn depressed color="primary">
            <span class="boutton">Retour à la liste des manèges</span>
        </v-btn>
      </router-link>
    </div>
    <div class="manege">
      <v-card elevation="8" style="padding: 60px;border-radius: 30px;">
        <v-card-title>Formulaire pour la modification du manège</v-card-title>
        <v-card-text>
          Afin d'incrire votre manège à aux Papiots vous devez remplirer le formulaire ci-dessous.
          Votre demande sera traitée sera dans les plus brefs délais.
        </v-card-text>
        <div>
          <v-form class="contactForm" action="#">
            <v-text-field label="Nom de l'attraction" required :value="attraction.nom"></v-text-field>
            <v-text-field label="Prix enfant" prefix="€" required :value="attraction.prix_enfant"></v-text-field>
            <v-text-field label="Prix adulte" prefix="€" required :value="attraction.prix_adulte"></v-text-field>
            <v-select label="Type"></v-select>
            <v-btn color="info" type="submit">Modifier</v-btn>
          </v-form>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModifierManege",
  data(){
    return {
      form: {
        nom:'',
        prixEnfant:'',
        prixAdulte:'',
      }
    }
  },
  props: {
    attraction: Object,
  },
  computed:{
    idAttraction() {
      return this.$route.params.id;
    }
  }
}
</script>

<style scoped>
  v-btn{
    width: 20px;
  }
  .boutton{
    color: white;
  }
</style>