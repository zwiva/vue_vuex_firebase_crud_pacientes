<template>
  <div class="home">
    <div>
      <h1>Esta es la vista HOME</h1>
      <button @click="goToPatients">Ver todos los pacientes</button>

      <pre></pre>
    </div>
  </div>
</template>

<script>
// import Firebase from "firebase";
export default {
  name: "Home",
  methods: {
    goToPatients() {
      this.$router.push("/pacients");
    },
  },
};
</script>
