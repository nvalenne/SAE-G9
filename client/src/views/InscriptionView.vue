<template>
  <div id="app">
    <div id="inscription">
      <div style="width:40%">
        <v-card elevation="4" class="cardInscription">
          <div class="headerInscription" style="margin-bottom: 15px;">
            <img alt="Roue" src="../assets/wheel.gif" style="width: 20%">
          </div>
          <div>
            <v-form id="formInscription">
              <label id="email">Adresse Email</label>
              <v-text-field type="text" id="email"></v-text-field>
              <label id="username">Nom d'utilisateur</label>
              <v-text-field type="text" id="username"></v-text-field>
              <label id="password">Mot de passe</label>
              <v-text-field type="password" id="password"></v-text-field>
              <v-btn color="success">S'inscrire</v-btn>
            </v-form>
          </div>
        </v-card>
      </div>
      <div>
        <span>Vous avez déjà un compte ? Cliquez <router-link to="/connexion">ici</router-link> pour vous connecter</span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
    name: 'InscriptionView',
    metaInfo: {
      title: 'Inscription - Les Papiots'
    }
}
</script>

<style scoped>
#inscription,
.headerInscription,
#formInscription{
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.cardInscription{
  border-radius: 40px;
  padding: 10px 0 20px 0;
}
</style>