<template>
  <div class="app">
    <div>
      <v-btn depressed color="primary">
        <router-link to="/liste_manege">
          <span class="boutton">Retour à la liste des manèges</span>
        </router-link>
      </v-btn>
    </div>
    <div class="manege">
      <editor
          initial-value="Once upon a time..."
      />
    </div>
  </div>
</template>

<script>
import editor from '@tinymce/tinymce-vue'
export default {
  name: "ModifierManege",
}
</script>

<style scoped>
  v-btn{
    width: 20px;
  }
  .boutton{
    color: white;
  }
</style>