<template>
    <div class="livre_or">
      <span class="main-title">Livre d'or</span>
      <div>
        <v-form class="contactForm" action="/" method="post">
          <label for="email">Nom</label>
          <v-text-field type="text" id="nom" v-model="form.nom"></v-text-field>
          <label for="email">Message</label>
          <v-textarea type="text" id="message" v-model="form.message"></v-textarea>

          <v-btn color="success" @click="submitForm">Envoyer</v-btn>
        </v-form>
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LivreOrView",
  data() {
    return {
      form: {
        nom:'',
        message:''
      }
    }
  },
  methods:{
    submitForm(){
      axios.post('http://localhost:3000/formulaires/avis-livre-d-or', this.form)
          .then((res) => console.log(res.data))
      this.$router.push('/');
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