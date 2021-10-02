<template>
  <div class="home">
    <div>
      <h1>Esta es la vista HOME</h1>
      <button @click="goToPacients">Ver todos los pacientes</button>

      <pre></pre>
    </div>
  </div>
</template>

<script>
// import Firebase from "firebase";
export default {
  name: "Home",
  data: () => ({
    pacients: [],
  }),
  // mounted: {
    // Firebase.firestore().collection("pacients")
  // },

  methods: {
    goToPacients() {
      this.$router.push("/pacients");
    },
  },
};
</script>
