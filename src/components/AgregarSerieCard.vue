<template>
    <div class="container">
      <!-- Campos de entrada -->
      <div class="container-form">
      <div class="form-outline mb-4">
        <label class="form-label" for="titleInput">Título</label>
        <input type="text" id="titleInput" v-model="title" class="form-control" placeholder="Título de la serie" />
      </div>
      <div class="form-outline mb-4">
        <label class="form-label" for="coverUrlInput">URL de la Portada</label>
        <input type="text" id="coverUrlInput" v-model="coverUrl" class="form-control" placeholder="URL de la portada" />
      </div>
      <div class="form-outline mb-4">
        <label class="form-label" for="episodesInput">Capítulos</label>
        <input type="number" id="episodesInput" v-model="episodes" class="form-control" placeholder="Número de capítulos" />
      </div>
      <div class="form-outline mb-4">
        <label class="form-label" for="durationInput">Minutos</label>
        <input type="number" id="durationInput" v-model="duration" class="form-control" placeholder="Minutos promedio de los capítulos" />
      </div>
      <!-- Botón de agregar -->
      <div class="d-flex align-items-center justify-content-center pb-4">
        <button type="button" class="btn-personalized" @click="confirmAddSeries">Agregar</button>
      </div>
    </div>
      <!-- Pantalla emergente de confirmación -->
      <div v-if="showConfirmation" class="confirmation-overlay">
        <div class="confirmation-box">
          <h3>¿Estás seguro de agregar esta serie?</h3>
          <p><strong>Título:</strong> {{ title }}</p>
          <p><strong>URL de la Portada:</strong> {{ coverUrl }}</p>
          <p><strong>Capítulos:</strong> {{ episodes }}</p>
          <p><strong>Minutos:</strong> {{ duration }}</p>
          <div class="confirmation-buttons">
            <button type="button" class="btn-personalized" @click="addSeries">Confirmar</button>
            <button type="button" class="btn-personalized" @click="cancelAddSeries">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      title: '',
      coverUrl: '',
      episodes: '',
      duration: '',
      showConfirmation: false
    };
  },
  methods: {
    confirmAddSeries() {
      this.showConfirmation = true;
    },
    addSeries() {
      // Aquí puedes agregar la lógica para guardar la serie en tu aplicación o enviarla al servidor
      console.log('Serie agregada:', {
        title: this.title,
        coverUrl: this.coverUrl,
        episodes: this.episodes,
        duration: this.duration
      });

      // Reiniciar los campos de entrada y ocultar la pantalla de confirmación
      this.title = '';
      this.coverUrl = '';
      this.episodes = '';
      this.duration = '';
      this.showConfirmation = false;
    },
    cancelAddSeries() {
      // Reiniciar los campos de entrada y ocultar la pantalla de confirmación
      this.title = '';
      this.coverUrl = '';
      this.episodes = '';
      this.duration = '';
      this.showConfirmation = false;
    }
  }
};
</script>
<style>
.confirmation-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.confirmation-box {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.confirmation-buttons {
  margin-top: 20px;
}
.btn-personalized{
    background:linear-gradient(180deg, rgb(255, 40, 2), rgb(255, 134, 35) );
    width: 100px;
    height: 50px;
    border: 0px;
    border-radius: 10px;
    transition: background 0.5s ease-out;
    transition: box-shadow 0.3s;
}
.btn-personalized:hover{
    box-shadow: 5px 5px 20px rgb(255, 40, 2);
}
.container-form{
    border-radius: 50px;
background: #e0e0e0;
box-shadow: inset 20px 20px 60px #f1f1f1,
            inset -20px -20px 60px #ffffff;
    width: 500px;
    padding: 20px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
/* Estilos adicionales según tus necesidades */
</style>
