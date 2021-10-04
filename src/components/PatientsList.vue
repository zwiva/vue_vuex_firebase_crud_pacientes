<template>
  <div>
    <ul>
      <li v-for="patient of $store.state.patients" :key="patient.id">
        {{ patient.name }} | {{ patient.lastname }} | {{ patient.prevision }} |
        {{ patient.age }}
        <button @click="editUser(patient)">Editar</button>
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
      console.log("eliminar usuario by: ", patient.id);
      this.$store.dispatch("deletePatient", patient);
    },
    editUser(patient) {
      console.log("editar usuario by: ", patient);
      // this.$store.dispatch("getAllPatients");
    },
  },

  mounted() {
    // console.log("mounted patient list");
  },
};
</script>
