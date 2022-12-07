<template>
  <div id="navbar">
    <nav>
      <v-row>
        <div class="logo col-1">
          <img src="../../public/logo/logo.png" id="logo" />
        </div>
        <div class="col-8">
          <router-link to="/">
            <v-icon color="white">mdi-home</v-icon>
          </router-link>
          <router-link to="/carte">
            <v-icon color="white">mdi-map</v-icon>
            Carte interactive
          </router-link>
          <router-link to="/liste_manege">Liste des manèges</router-link>
          <router-link to="/contact">
            <v-icon color="white">mdi-contact</v-icon>
            Nous contacter
          </router-link>
        </div>
        <div class="col-3">
          <router-link to="/connexion" class="connexion">
            <span class="accountIcon">
              <v-icon color="white">mdi-account-circle</v-icon>
              <span></span> <!--AFFICHER NOM DU COMPTE LORSQUE CONNEXION-->
            </span>
          </router-link>
        </div>
      </v-row>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
nav {
  text-align: center;
  padding: 10px;
  background-color: rgb(29, 27, 27);
}

nav a {
  font-weight: bold;
  font-family: Poppins, sans-serif;
  font-size: 20px;
  color: #ffffff;
  margin: 0 30px 0 30px;
  text-decoration: none;
}

nav a:hover {
  color: #2db22d;
}
nav a.router-link-exact-active {
  color: darkgreen;
}
#logo {
  width: 30px;
}
.accountIcon {
}
</style>