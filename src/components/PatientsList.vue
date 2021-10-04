<template>
  <div>
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
export default {
  name: "PatientList",
  props: {
    patients: { type: Array, require: true },
  },
  methods: {
    deleteUser(patient) {
      // console.log("eliminar usuario by: ", patient.id);
      this.$store.dispatch("deletePatient", patient);
    },
  },

  mounted() {
    // console.log("mounted patient list");
  },
};
</script>
