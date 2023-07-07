<template>
  <RouterLink to="/"><NavBar></NavBar></RouterLink>
  <input v-model="busqueda" style="width: 400px;" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
  <div class="big-container">
    <div v-for="serie in seriesFiltradas" :key="serie._id">
      <CartaSerie :modelo="serie"></CartaSerie>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBarAdmin.vue";
import CartaSerie from "../components/AgregarSeriePub.vue";
import { seriesAdmin } from "../services/auth.service.js";

export default {
  components: {
    NavBar,
    CartaSerie,
  },
  data() {
    return {
      series: [],
      busqueda: '',
    };
  },
  async mounted() {
    this.series = await seriesAdmin();
    console.log(this.series);
  },
  computed: {
    seriesFiltradas() {
      if (this.busqueda) {
        return this.series.filter((serie) =>
          serie.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
        );
      } else {
        return this.series;
      }
    },
  },
};
</script>

<style scoped>
.big-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 20px;
}
</style>
