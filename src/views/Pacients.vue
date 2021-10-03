<template>
  <div>
    <h1>Vista pacientes</h1>
    <h3>Todos los pacientes</h3>
    <!-- <pre>{{pacients}}</pre> -->
    <pacients-list :pacients="pacients" />
    <h3>Agregar o editar paciente</h3>
    <pacient-form />
  </div>
</template>

<script>
import Firebase from "firebase";
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
  mounted() {
    Firebase.firestore()
      .collection("pacients")
      .get()
      .then((collection) => {
        collection.forEach((document) => {
          this.pacients.push({ id: document.id, ...document.data() }); // nuevo objeto con id
        });
      });
    Firebase.firestore()
      .collection("pacients")
      .onSnapshot((querySnapshot) => {
        this.pacients = [];
        querySnapshot.forEach((document) => {
          this.pacients.push({ id: document.id, ...document.data() }); // nuevo objeto con id
        });
      });
  },
};
</script>
