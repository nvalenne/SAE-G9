<template>
  <div id="app">
    <nav>
      <a><router-link to="/">Acceuil</router-link></a>
      <a><router-link to="/carte">Carte intéractive</router-link></a>
      <a><router-link to="/liste_manege">Liste des manèges</router-link></a>
      <a><router-link to="/contact">Nous contacter</router-link></a>
    </nav>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: lightblue;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 20px 0 20px;
}

nav a:hover{
  color: #2db22d;
}
nav a.router-link-exact-active {
  color: darkgreen;
}
</style>
