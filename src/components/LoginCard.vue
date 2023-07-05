<template>
  <div class="container">
    <div class="form-container">
      <form>
        <h1>MyTVList</h1>
        <div class="logo-container">
          <div class="logo"></div>
        </div>
        <p>Please login to your account</p>

        <div class="form-outline mb-4">
          <input v-model="User.email" type="email" id="form2Example11" class="form-control" placeholder="Tu usuario" />
          <label class="form-label" for="form2Example11">Usuario</label>
        </div>

        <div class="form-outline mb-4">
          <input v-model="User.password" type="password" id="form2Example22" class="form-control" placeholder="Tu contraseña" />
          <label class="form-label" for="form2Example22">Contraseña</label>
        </div>
        <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>
        
        <div class="text-center pt-1 mb-4 pb-1">
          <p>¿No tienes una cuenta?</p>
          <a class="text-muted" href="/registro">Ingresa aquí</a>
        </div>

        <div class="d-flex align-items-center justify-content-center pb-4">
          <button @click="onSubmit" type="button" class="btn-personalized">Ingresar</button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import {login} from "../services/auth.service.js";
import {setToken} from "../services/helpers.js";
//
export default {
  data() {
  return {
    User: {
      email: '',
      password: '',
    },
    errorMessage : '',
  };
},
methods:{
    async onSubmit() {
  try {
    const response = await login({
      email: this.User.email,
      password: this.User.password,
    });
    setToken(response.token);
    this.$router.push('/series');
  } catch (error) {
    this.errorMessage = error.message || 'Error';
  }
}
}
    


}

</script>
<style scoped>
.form-container {
  border-radius: 50px;
  background: linear-gradient(145deg, #ffffff, #e4e3e3);
  box-shadow: 5px 5px 0px #bebebe;
  padding: 20px;
  width: 400px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
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

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(180deg, rgb(255, 40, 2), rgb(255, 134, 35));
}

.error-message {
  background-color: #ffcccc;
  color: #ff0000;
  padding: 10px;
  text-align: center;
  margin-bottom: 10px;
}
</style>