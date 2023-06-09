<template>
  <NavBar></NavBar>
  <CartaSerie></CartaSerie>
  <button type="button" class="btn btn-warning">Agregar Serie a lista general</button>
</template>
<script>
import NavBar from "../components/NavBarAdmin.vue";
import CartaSerie from "../components/EliminarSerie.vue";
export default {
  components:{
    NavBar,CartaSerie,
    },}
</script>
<style scoped>

</style>