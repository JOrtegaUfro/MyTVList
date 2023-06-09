<template>
    <div class="container">  
        <p class="introduccion">Bienvenido a MyTvList donde podras crear tu propia lista de series para organizarte</p>
    <div class="principal">
        <h1>MyTVList</h1>
        <div class="logo-container">

            <div class="logo"></div>

        </div>
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
</div>
</template>

<style scoped>
body{
    background: white;
}

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
}

.logo-container{

display: flex;
align-items: center;
justify-content: center;

}
.logo{
width: 100px;
height: 100px;
border-radius: 50%;
margin-bottom: 10px;
background: linear-gradient(180deg, rgb(255, 40, 2), rgb(255, 134, 35) );
}

.introduccion{
    position:absolute;
    margin-top: 7%;
    margin-left: 15%;
    width: 300px;
    word-break: normal;
}
</style>