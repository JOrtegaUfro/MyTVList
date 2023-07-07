<template>
  <div>
    <NavBar></NavBar>
    <div class="container">
      <div class="vistas-container">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="todos" v-model="filtroEstado">
          <label class="form-check-label" for="inlineRadio1">Todos</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Visto" v-model="filtroEstado">
          <label class="form-check-label" for="inlineRadio2">Vistos</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Viendo" v-model="filtroEstado">
          <label class="form-check-label" for="inlineRadio3">Viendo</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="abandonado" v-model="filtroEstado">
          <label class="form-check-label" for="inlineRadio4">Abandonados</label>
        </div>
      </div>
      <input v-model="busqueda" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">

      <div class="card-container">
        <div v-for="serie in seriesFiltradas" :key="serie._id">
          <CartaSerie :modelo="serie"></CartaSerie>
        </div>
      </div>
    </div>
    <RouterLink to="/TipoAgregar"><BotonAgregar></BotonAgregar></RouterLink>
  </div>
</template>

<script>
import CartaSerie from "../components/CartaSerie.vue";
import BotonAgregar from "../components/BotonAgregar.vue";
import NavBar from "../components/NavBarUsuario.vue";
import { seriesUsuario } from "../services/auth.service.js";

export default {
  components: {
    CartaSerie,
    BotonAgregar,
    NavBar,
  },
  data() {
    return {
      series: [],
      busqueda: null,
      filtroEstado: "todos",
    };
  },
  async mounted() {
    this.busqueda = localStorage.getItem("busqueda");
    this.series = await seriesUsuario();
    if (this.series.error) {
      this.series = [];
    }
    console.log(this.series);
  },
  computed: {
    seriesFiltradas() {
      let seriesFiltradas = this.series;

      if (this.busqueda) {
        seriesFiltradas = seriesFiltradas.filter((serie) =>
          serie.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
        );
      }

      if (this.filtroEstado !== "todos") {
        seriesFiltradas = seriesFiltradas.filter((serie) =>
          serie.estado === this.filtroEstado
        );
      }

      return seriesFiltradas;
    },
  },
};
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 20px;
}

.vistas-container {
  margin-bottom: 10px;
}
</style>


