<template>
  <RouterLink to="/"><NavBar></NavBar></RouterLink>
  <div class="big-container">
  <div v-for="serie in series" :key="serie._id">
  <CartaSerie :modelo="serie"></CartaSerie>
</div>
</div>
  <RouterLink to="/AgSeriesGeneral"><button type="button" class="btn btn-warning">Agregar Serie a lista general</button></RouterLink>
</template>
<script>
import NavBar from "../components/NavBarAdmin.vue";
import CartaSerie from "../components/EliminarSerie.vue";
import {seriesAdmin} from "../services/auth.service.js";


export default {
  components:{
    NavBar,CartaSerie,
    },
    data() {
    return {
      series:[], 
  }
},
    async mounted(){
      this.series= await seriesAdmin();
      
      console.log(this.series);
    }
  }
</script>
<style scoped>
.big-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 20px;
}
</style>