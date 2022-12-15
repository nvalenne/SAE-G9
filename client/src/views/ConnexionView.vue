<template>
  <div id="app">
    <div id="connexion">
      <div style="width:40%">
        <br>
        <v-card elevation="4" class="cardConnexion">
          <div class="headerConnexion" style="margin-bottom: 15px;">
            <img src="../assets/wheel.gif" style="width: 20%">
          </div>
          <div>
            <v-form id="formConnexion">
              <label for="username">Nom d'utilisateur</label>
              <v-text-field type="text" id="username"></v-text-field>
              <label for="password">Mot de passe</label>
              <v-text-field type="password" id="password"></v-text-field>
              <v-btn color="success">Se connecter</v-btn>
            </v-form>
          </div>
        </v-card>
      </div>
      <div>
        <br>
        <span>Vous n'avez pas de compte ? Cliquez <router-link to="/inscription">ici</router-link> pour vous le
          créer</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ConnectionView',
  metaInfo: {
    title: 'Connexion - Les Papiots'
  }
}



</script>
<style scoped>
#connexion,
.headerConnexion,
#formConnexion {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.cardConnexion {
  border-radius: 40px;
  padding: 10px 0 20px 0;
}
</style>
