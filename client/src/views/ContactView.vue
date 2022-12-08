<template>
  <div class="accueil">
    <div class="contactContent">
      <v-card elevation="8" style="width: 60%;padding: 60px;border-radius: 30px;">
        <v-card-title>Un problème ?</v-card-title>
        <v-card-text>
          Vous pouvez nous contacter en remplissant le formulaire ci-dessous.
          Votre demande sera traitée sera dans les plus brefs délais.
        </v-card-text>
        <div>
          <v-form class="contactForm" action="#">
            <v-text-field label="Adresse mail" required></v-text-field>
            <v-text-field label="Nom" required></v-text-field>
            <v-text-field label="Prénom" required></v-text-field>
            <v-textarea label="Message" required></v-textarea>
            <v-btn color="success" type="submit">Envoyer</v-btn>
          </v-form>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  metaInfo: {
    title: "Nous contacter - Les Papiots",
  },
};
</script>

<style scoped>
.contactContent,
.contactForm {
  display: flex;
  justify-content: center;
}

.contactForm {
  flex-direction: column;
}
</style>
