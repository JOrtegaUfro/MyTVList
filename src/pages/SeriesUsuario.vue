<template>
  <div>
  <NavBar></NavBar>
  <div class="container">
    <div class="card-container">
      <div v-for="serie in series" :key="serie._id">
  <CartaSerie :modelo="serie"></CartaSerie>
</div>
</div>
  </div>
  <RouterLink to="/AgSerieUs"><BotonAgregar></BotonAgregar></RouterLink>
</div>
</template>
    
<script>

import CartaSerie from "../components/CartaSerie.vue";
import BotonAgregar from "../components/BotonAgregar.vue";
import NavBar from "../components/NavBarUsuario.vue";
import {seriesUsuario} from "../services/auth.service.js";

export default {
  components:{
      CartaSerie,
      BotonAgregar,NavBar,
    },data() {
    return {
      series:[], 
  
  }
},
    async mounted(){
      this.busqueda= localStorage.getItem("busqueda");
      this.series= await seriesUsuario();
      if(this.series.error){
        this.series=[];
      }
    console.log(this.series);
    }
  }
</script>

<style scoped>

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 20px;
}
</style>