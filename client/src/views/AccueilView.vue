<template>
    <div>
      <NavBar/>
      <div class="accueil">
        <h1>Pissforaine</h1>
        <img src="../../public/image_acceuil.jpg">
      </div>
      <hr>
      <div class="desciption">
        <p>Fete forraine trop cool !!!!!!!!!!!</p>
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

<style>
div{
  padding: 20px;
}

img{
  alignment: center;
}

hr{
  border: solid lightblue 5px;
  border-radius: 10px;
  width: 80%;
}
</style>
