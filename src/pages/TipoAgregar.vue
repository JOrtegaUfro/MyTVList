<template>
<h1>¿Como quieres agregar tu serie?</h1>
<br>
<RouterLink to="/AgSerieUs"><a href="#" class="button-3d">Crear Propia</a></RouterLink>
<RouterLink to="/SeriesPublica"><a href="#" class="button-3d">Agregar Serie publica</a><br></RouterLink> 
</template>
<script>

</script>
<style scoped>
body {
  text-align: center;
  color:#ecf0f1;
  background-color: #2c3e50;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  margin-top: 20px;
}

.button-3d {
  position:relative;
  width: auto;
  display:inline-block;
  color:#ecf0f1;
  text-decoration:none;
  border-radius:5px;
  border:solid 1px #f39c12;
  background:#e67e22;
  text-align:center;
  padding:16px 18px 14px;
  margin: 12px;
  
  -webkit-transition: all 0.1s;
	-moz-transition: all 0.1s;
	transition: all 0.1s;
	
  -webkit-box-shadow: 0px 6px 0px #d35400;
  -moz-box-shadow: 0px 6px 0px #d35400;
  box-shadow: 0px 6px 0px #d35400;
}

.button-3d:active{
    -webkit-box-shadow: 0px 2px 0px #d35400;
    -moz-box-shadow: 0px 2px 0px #d35400;
    box-shadow: 0px 2px 0px #d35400;
    position:relative;
    top:4px;
}
</style>