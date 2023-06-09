<template>

<div class="container">
    <div class="form-container">
    <form>


        <div class="logo-container">
            <div class="logo"></div>
        </div>
        <h1>MyTVList</h1>
        <div class="form-outline mb-4">
            <input type="email" id="form2Example11" class="form-control" placeholder="Tu correo" />
            <label class="form-label" for="form2Example11">Correo Electronico</label>
        </div>
        <div class="form-outline mb-4">
            <input type="email" id="form2Example11" class="form-control" placeholder="Tu usuario" />
            <label class="form-label" for="form2Example11">Usuario</label>
        </div>

        <div class="form-outline mb-4">
            <input type="password" id="form2Example22" class="form-control" placeholder="Tu contraseña"/>
            <label class="form-label" for="form2Example22" >Contraseña</label>
        </div>
        <div class="form-outline mb-4">
            <input type="password" id="form2Example22" class="form-control" placeholder="confirma tu contraseña"/>
            <label class="form-label" for="form2Example22" >Confirma tu nueva contraseña contraseña</label>
        </div>

        <div class="text-center pt-1 mb-5 pb-1">
            <p>¿no tienes una cuenta?</p>
            <a class="text-muted" href="#!">Ingresa aqui</a>
        </div>

        <div class="d-flex align-items-center justify-content-center pb-4">
            <RouterLink to="/login"><button type="button" class="btn-personalized">Registrar</button></RouterLink>
        </div>

    </form>
</div>
</div>

</template>
<style scoped>

.form-container{
    border-radius: 50px;
    background: linear-gradient(145deg, #ffffff, #e4e3e3);
    box-shadow:  5px 5px 0px #bebebe;
    padding: 20px;
    width:400px;
}
.container{
    display: flex;
  align-items: center;
  justify-content: center;
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
.logo-container{

    display: flex;
    align-items: center;
    justify-content: center;

}
.logo{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(180deg, rgb(255, 40, 2), rgb(255, 134, 35) );
}

</style>