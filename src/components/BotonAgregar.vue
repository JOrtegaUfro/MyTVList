<template>
<button class="btn">
    <div class="btn-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
</div>
</button>
</template>
<style scoped>
.btn-container{
    display: flex;
  justify-content: center;
  align-items: center;
    width:500px;
    height: 200px;
    background:#9f6088;
    border-radius: 20px;

}
.btn-container:hover{
    box-shadow:  inset 40px 40px 60px #875274;


}
.bi-plus-circle {
  width: 100px; /* Ajusta el tamaño del SVG según tus necesidades */
  height: 100px; /* Ajusta el tamaño del SVG según tus necesidades */
  fill: white; /* Color del icono */
}
</style>