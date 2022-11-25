<template>
  <div class="accueil">
    <NavBar/>
    <h1>Carte normalement intéractive</h1>
  </div>
</template>

<script>

import NavBar from "@/components/NavBar";
export default {
  name: 'CarteView',
  components: {
    NavBar

  },
  metaInfo: {
    title: 'Carte intéractive'
  }
}
</script>
