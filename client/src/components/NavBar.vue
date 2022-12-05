<template>
  <div id="navbar">
    <nav>
      <div class="logo">
        <img src="../../public/logo.png" id="logo">
      </div>
      <a><router-link to="/">Accueil</router-link></a>
      <a><router-link to="/carte">Carte interactive</router-link></a>
      <a><router-link to="/liste_manege">Liste des manèges</router-link></a>
      <a><router-link to="/contact">Nous contacter</router-link></a>
      <a class="connexion"><router-link to="/connexion">Connexion</router-link></a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
nav {
  float: none;
  text-align: center;
  padding: 20px;
  background-color: lightblue;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 20px 0 20px;
}

.connexion{
  color: red;
}

nav a:hover{
  color: #2db22d;
}
nav a.router-link-exact-active {
  color: darkgreen;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>