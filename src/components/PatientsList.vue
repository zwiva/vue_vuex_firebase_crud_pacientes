<template>
  <div>
    <ul>
      <li v-for="patient of $store.state.patients" :key="patient.id">
        {{ patient.name }} | {{ patient.lastname }} | {{ patient.prevision }} |
        {{ patient.age }}
        <button @click="deleteUser">Eliminar</button>
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
    deleteUser() {
      console.log("eliminar usuario");
    },
  },

  mounted() {
    // Firebase.firestore()
    //   .collection("patients")
    //   .get()
    //   .then((collection) => {
    //     collection.forEach((document) => {
    //       this.patients.push({ id: document.id, ...document.data() }); // nuevo objeto con id
    //     });
    //   });
    // this.$store.dispatch("getAllPatients");
    // console.log("mounted in patientslist 2", patients);

    // Firebase.firestore()
    //   .collection("patients")
    //   .onSnapshot((querySnapshot) => {
    //     this.patients = [];
    //     querySnapshot.forEach((document) => {
    //       this.patients.push({ id: document.id, ...document.data() });
    //     });
    //   });

    console.log("pacient list");
  },
};
</script>
