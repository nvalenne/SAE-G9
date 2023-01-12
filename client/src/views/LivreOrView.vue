<template>
    <div class="livre_or">
      <span class="main-title">Livre d'or</span>
      <div>
        <v-form class="contactForm" action="/" method="post">
          <label for="email">Nom</label>
          <v-text-field type="text" id="nom" v-model="form.nom"></v-text-field>
          <label for="email">Message</label>
          <v-textarea type="text" id="message" v-model="form.message"></v-textarea>

          <v-text-field></v-text-field>

          <v-btn color="success" type="submit">Envoyer</v-btn>
        </v-form>
      </div>
    </div>
</template>

<script>
export default {
  name: "LivreOrView",
  data() {
    return {
      form: {

      }
    }
  }
}
</script>

<style scoped>
.livre_or {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.main-title{
  font-size: 7em;
}
</style>