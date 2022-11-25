<template>
  <div class="accueil">
    <NavBar/>
    <h1>Nous contacter</h1>
  </div>
</template>

<script>

import NavBar from "@/components/NavBar";
export default {
  name: 'ContactView',
  components: {
    NavBar

  },
  metaInfo: {
    title: 'Nous contacter'
  }
}
</script>
