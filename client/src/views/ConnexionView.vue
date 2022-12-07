<template>
  <div id="app">
    <NavBar/>
    <div id="connexion">
      <div style="width:40%">
        <div class="headerConnexion" style="margin-bottom: 15px;">
          <img src="../assets/wheel.gif" style="width: 20%">
        </div>
        <div>
          <form id="formConnexion">
            <label for="username">Nom d'utilisateur</label>
            <v-text-field type="text" id="username"></v-text-field>
            <label for="password">Mot de passe</label>
            <v-text-field type="password" id="password"></v-text-field>
            <v-btn color="success">Se connecter</v-btn>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import NavBar from "@/components/NavBar";
export default {
  name: 'ConnectionView',
  components: {
    NavBar

  },
  metaInfo: {
    title: 'Connection'
  }
}



</script>
<style scoped>
  #connexion, .headerConnexion, #formConnexion{
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
