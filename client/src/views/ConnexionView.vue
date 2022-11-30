<template>
  <div class="connection">
    <NavBar/>
    <h1>Connexion</h1>
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
