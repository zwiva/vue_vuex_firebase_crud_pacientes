<template>
  <div>
    <h1>Vista pacientes</h1>
    <h3>Todos los pacientes</h3>
    <pacients-list />
    <h3>Agregar o editar paciente</h3>
    <pacient-form />
  </div>
</template>

<script>
import PacientsList from "../components/PacientsList.vue";
import PacientForm from "../components/PacientForm.vue";

export default {
  name: "Pacients",
  components: {
    PacientsList,
    PacientForm,
  },
  data: () => ({
    pacients: [],
  }),
  // mounted: {
  // Firebase.firestore().collection("pacients")
  // },
};
</script>
