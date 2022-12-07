<template>
  <v-app>
    <NavBar/>
    <router-view />
    <FooterVue/>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterVue from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    NavBar,
    FooterVue
  },

  data: () => ({
    //
  }),
};
</script>
