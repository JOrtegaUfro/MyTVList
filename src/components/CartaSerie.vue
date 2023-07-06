<template>

<div class="card" >
  <img :src="portada" class="card-img-top" onerror="this.src='https://picsum.photos/200/300'"  alt="Imagen">
  <div class="card-body">
    <h5 class="card-title">{{ modelo.nombre }}</h5>
    <p class="card-text"> {{ modelo._id }} </p>

    <div class="custom-select" >
  <select class="select-drop">
    <option value="0">Estado de la serie:</option>
    <option value="1">Viendo</option>
    <option value="2">Visto</option>
    <option value="3">Abandonado</option>
    </select>
</div>

    <p class="card-text"><small class="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tv" viewBox="0 0 16 16">
  <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/>
</svg>{{ modelo.capitulos }} capitulos</small></p>
    <p class="card-text"><small class="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg>{{ modelo.minutos }} min</small></p>


</div>


</div>

</template>
<script>

export default {
  props: {
    modelo: {
      type: Object,
      required: false,
    }
    },
    data() {
    return {
      portada:String, 
  }
},
async mounted(){
    this.portada = this.modelo.portada;
    }
  
  }</script>
<style scoped>

.btn {
  margin-top: 0px;
 
}

.card {
  flex-direction: row;
  margin-top: 30px; 
  margin-bottom: 30px;
  height: 200px;
  width: 500px;
  background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);

  
}
.card img {
  width: 200px;
  height: 200px;
  border-radius: 20px;

}


.card-img-top {
    transition: transform 0.3s;
  }

  .card-img-top:hover {
    transform: scale(1.2);
  }

.custom-select{
  width: 200px;
  display:inline-block;
  margin-bottom: 10px;
}

.select-drop{
  background-color: #ffffff;
  border-radius: 5px;
  border:none;
}



</style>