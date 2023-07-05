<template>
  <div class="container">
    <div class="form-container">
      <form>
        <div class="logo-container">
          <div class="logo"></div>
        </div>
        <h1>MyTVList</h1>
        <div class="form-outline mb-4" :class="{ 'has-error': !validEmail }">
          <input
            v-model="User.email"
            type="email"
            id="form2Example11"
            class="form-control"
            :class="{ 'is-invalid': !validEmail }"
            placeholder="Tu correo"
          />
          <label class="form-label" for="form2Example11">Correo Electrónico</label>
          <span v-if="!validEmail" class="error-message">El formato del correo electrónico no es válido.</span>
        </div>
        <div class="form-outline mb-4">
          <input
            v-model="User.name"
            type="name"
            id="form2Example11"
            class="form-control"
            placeholder="Tu usuario"
          />
          <label class="form-label" for="form2Example11">Usuario</label>
        </div>

        <div class="form-outline mb-4" :class="{ 'has-error': !validPasswords }">
          <input
            v-model="User.password"
            type="password"
            id="form2Example22"
            class="form-control"
            :class="{ 'is-invalid': !validPasswords }"
            placeholder="Tu contraseña"
          />
          <label class="form-label" for="form2Example22">Contraseña</label>
          <span v-if="!validPasswords" class="error-message">Las contraseñas no coinciden.</span>
        </div>
        <div class="form-outline mb-4" :class="{ 'has-error': !validPasswords }">
          <input
            v-model="confirmPassword"
            type="password"
            id="form2Example33"
            class="form-control"
            :class="{ 'is-invalid': !validPasswords }"
            placeholder="Confirma tu contraseña"
          />
          <label class="form-label" for="form2Example33">Confirma tu nueva contraseña</label>
        </div>

        <div class="text-center pt-1 mb-5 pb-1">
          <p>¿No tienes una cuenta?</p>
          <span v-if="!validEmail || !validPasswords" class="error-message">Por favor corrige los errores en el formulario.</span>
          <a class="text-muted" href="#!">Ingresa aquí</a>
        </div>

        <div class="d-flex align-items-center justify-content-center pb-4">
          <button @click="crearUsuario" type="button" class="btn-personalized">Registrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      User: {
        name: '',
        email: '',
        password: '',
      },
      confirmPassword: '',
      validEmail: true,
      validPasswords: true,
    };
  },
  methods: {
    crearUsuario() {
      this.validEmail = this.validateEmail();
      this.validPasswords = this.validatePasswords();

      if (!this.validEmail || !this.validPasswords) {
        return;
      }

      console.log(this.User)

      axios
        .post('http://localhost:3000/auth/register', this.User)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(this.User.email);
    },
    validatePasswords() {
      return this.User.password === this.confirmPassword;
    },
  },
};
</script>
<style scoped>

.error-message {
  color: red;
  font-size: 12px;
  display: block;
}

.has-error .form-label {
  color: red;
}

.has-error .form-control {
  border-color: red;
}

.is-invalid {
  border-color: red;
}
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