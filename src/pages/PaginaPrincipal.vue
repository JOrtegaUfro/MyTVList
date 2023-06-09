<template>
    <div class="back">
        
<FormEntrada></FormEntrada>
</div>
</template>
<script>
import FormEntrada from "../components/FormEntrada.vue";
export default {
  components:{
      FormEntrada,
    },}
</script>
<style scoped>
.back{
    background: red;
    width:100vw;
    height: 100vh;
    background: linear-gradient(215deg, transparent 0%, rgb(252, 252, 252)40%),
              url(https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/ONNUKFN3SNHK7F4KEH2BXHHHUA.jpg);
  background-size: cover;
}
</style>