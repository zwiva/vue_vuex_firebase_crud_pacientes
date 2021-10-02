<template>
  <div>
    <h1>Todos los pacientes</h1>
    <pacients-list />
  </div>
</template>

<script>
import PacientsList from "../components/PacientsList.vue";

export default {
  name: "AllPacients",
  components: {
    PacientsList,
  },
};
</script>

<style>
</style>