<template>
    <div class="container">
      <!-- Campos de entrada -->
      <div class="container-form">
        <div class="form-outline mb-4">
          <label class="form-label" for="titleInput">Título</label>
          <input type="text" id="titleInput" v-model="Serie.nombre" class="form-control" placeholder="Título de la serie" />
        </div>
        <div class="form-outline mb-4">
          <label class="form-label" for="coverUrlInput">URL de la Portada</label>
          <input type="text" id="coverUrlInput" v-model="Serie.portada" class="form-control" placeholder="URL de la portada" />
        </div>
        <div class="form-outline mb-4">
          <label class="form-label" for="episodesInput">Capítulos</label>
          <input type="number" id="episodesInput" v-model="Serie.capitulos" class="form-control" placeholder="Número de capítulos" />
        </div>
        <div class="form-outline mb-4">
          <label class="form-label" for="durationInput">Minutos</label>
          <input type="number" id="durationInput" v-model="Serie.minutos" class="form-control" placeholder="Minutos promedio de los capítulos" />
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
           <RouterLink to="/SeriesAdmin"><button type="button" class="btn-personalized" @click="addSeries">Confirmar</button></RouterLink>
            <button type="button" class="btn-personalized" @click="cancelAddSeries">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import {crearSerieAdmin} from "../services/auth.service.js";
 
  export default {
    data() {
      return {
        Serie:{
          nombre:"",
          estado:"",
          portada:"",
          capitulos:"",
          minutos:"",
        },

        showConfirmation: false
      };
    },
    methods: {
      confirmAddSeries() {
        this.showConfirmation = true;
      },
      async addSeries() {
        // Aquí puedes agregar la lógica para guardar la serie en tu aplicación o enviarla al servidor
        
        await crearSerieAdmin({
          portada:this.Serie.portada,
          nombre:this.Serie.nombre,
          estado:"Viendo",
          capitulos:this.Serie.capitulos,
          minutos:this.Serie.minutos,
        });
        
        console.log('Serie agregada:', {
          portada:this.Serie.portada,
          nombre:this.Serie.nombre,
          capitulos:this.Serie.capitulos,
          minutos:this.Serie.minutos,
        });
        this.$router.push({
        name: 'SeriesAdmin'
      });
      },
      cancelAddSeries() {
        // Reiniciar los campos de entrada y ocultar la pantalla de confirmación
        this.showConfirmation = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .container-form {
    border-radius: 50px;
    background: #e0e0e0;
    box-shadow: inset 20px 20px 60px #f1f1f1, inset -20px -20px 60px #ffffff;
    width: 500px;
    padding: 20px;
  }
  
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
  
  .btn-personalized {
    background: linear-gradient(180deg, rgb(255, 40, 2), rgb(255, 134, 35));
    width: 100px;
    height: 50px;
    border: 0px;
    border-radius: 10px;
    transition: background 0.5s ease-out;
    transition: box-shadow 0.3s;
  }
  
  .btn-personalized:hover {
    box-shadow: 5px 5px 20px rgb(255, 40, 2);
  }
  
  </style>
  
  