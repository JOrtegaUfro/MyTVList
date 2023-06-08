<template>
    <div class="principal">
        <h1>MyTVList</h1>
<button type="button" class="boton btn btn-danger">Entrar</button>
    </div>

<form>
    <div class="container-form">
  <div class="mb-3" style="width: 300px;">
    
    <div id="emailHelp" class="form-text">¿Quieres iniciar a utilizar MyTVList ya? Ingresa tu correo</div>
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <button type="button" class="btn btn-danger">Enviar</button>
  </div>
</div>
</form>
</template>
<script>

</script>
<style scoped>
.container-form{
    position: absolute;
    bottom: 10%;
    left: 5%;
}
.form-text{
    margin-bottom: 20px;
    margin-top: 20px;
}
.form-control{
    margin-bottom: 20px;
    margin-top: 20px;
}
.principal{
    position: absolute;
    left: 10%;
    top: 25%;
}
</style>