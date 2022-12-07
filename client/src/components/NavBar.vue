<template>
  <div id="navbar">
    <nav>
      <v-row>
        <div class="logo col-2">
          <img src="../../public/logo/logo.png" id="logo" />
        </div>
        <div class="col-8 navbar">
          <router-link to="/">
            <v-icon color="white">mdi-home</v-icon>
            <span>Accueil</span>
          </router-link>
          <router-link to="/carte">
            <v-icon color="white">mdi-map</v-icon>
            <span>Carte interactive</span>
          </router-link>
          <router-link to="/liste_manege">
            <v-icon color="white">mdi-view-list</v-icon>
            <span>Liste des manèges</span>
          </router-link>
          <router-link to="/contact">
            <v-icon>mdi-support</v-icon>
            <span>Nous contacter</span>
          </router-link>
        </div>
        <div class="col-2">
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
  background-color: rgb(29, 28, 27);
}
nav text {
  text-align: center;
}

nav a {
  font-weight: bold;
  font-family: Poppins, sans-serif;
  font-size: 20px;
  color: #ffffff;
  margin: 0 30px 0 30px;
  text-decoration: none;
}
.navbar span {
  vertical-align: middle;
  margin-left: 10px;
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