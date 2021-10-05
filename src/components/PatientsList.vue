<template>
  <div>
    <Preloader v-if="isLoaderActive" />
    <ul>
      <li v-for="patient of $store.state.patients" :key="patient.id">
        {{ patient.name }} | {{ patient.lastname }} | {{ patient.prevision }} |
        {{ patient.age }}
        <button @click="$emit('editPatient', patient)">Editar</button>
        <button @click="deleteUser(patient)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import Preloader from "../components/Preloader.vue";

export default {
  name: "PatientList",
  data: () => ({
    isLoaderActive: false,
  }),
  props: {
    patients: { type: Array, require: true },
  },
  components: { Preloader },
  methods: {
    deleteUser(patient) {
      this.isLoaderActive = true;
      // console.log("eliminar usuario by: ", patient.id);
      this.$store.dispatch("deletePatient", patient);
      setTimeout(() => {
        this.isLoaderActive = false;
      }, 1000);
    },
  },

  mounted() {
    // console.log("mounted patient list");
  },
};
</script>
