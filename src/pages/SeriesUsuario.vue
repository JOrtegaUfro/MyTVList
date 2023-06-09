<template>
  <div>
  <NavBar></NavBar>
  <div class="container">
    <div class="card-container">
<CartaSerie></CartaSerie>
<CartaSerie></CartaSerie>
<CartaSerie></CartaSerie>
<CartaSerie></CartaSerie>
</div>
  </div>
  <RouterLink to="/AgSerieUs"><BotonAgregar></BotonAgregar></RouterLink>
</div>
</template>
    
<script>

import CartaSerie from "../components/CartaSerie.vue";
import BotonAgregar from "../components/BotonAgregar.vue";
import NavBar from "../components/NavBarUsuario.vue";
export default {
  components:{
      CartaSerie,
      BotonAgregar,NavBar,
    },}
</script>

<style scoped>

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 20px;
}
</style>