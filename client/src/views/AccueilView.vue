<template>
    <div>
      <NavBar/>
      <div class="accueil">
        <h1>Acceuil</h1>
      </div>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: 'AccueilView',
  components: {
    NavBar
  },
  metaInfo: {
    title: 'Accueil'
  }
}
</script>
