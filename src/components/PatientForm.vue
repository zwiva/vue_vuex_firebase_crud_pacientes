<template>
  <div>
    <form @submit.prevent="sendForm" action="">
      <div>
        <label for="">Nombre</label>
        <input type="text" v-model="patient.name" />
      </div>
      <div>
        <label for="">Apellido</label>
        <input type="text" v-model="patient.lastname" />
      </div>
      <div>
        <label for="">Edad</label>
        <input type="number" v-model="patient.age" />
      </div>
      <div>
        <label for="">Prevision</label>
        <input type="text" v-model="patient.prevision" />
      </div>
      <div>
        <button type="submit">Aceptar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "",
  data: () => ({
    patient: {
      name: null,
      lastname: null,
      age: null,
      prevision: null,
    },
  }),
  methods: {
    sendForm() {
      console.log("creando paciente");
      this.$store.dispatch("createNewPacient", this.patient);
      this.patient = {};
    },
    editPatient() {
      console.log("editando patiente");
    },
  },
};
</script>
