<template>
  <RouterLink to="/"><NavBar></NavBar></RouterLink>
  <CartaSerie></CartaSerie>
  <RouterLink to="/AgSeriesGeneral"><button type="button" class="btn btn-warning">Agregar Serie a lista general</button></RouterLink>
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