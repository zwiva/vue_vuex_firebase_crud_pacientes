<template>
  <form @submit.prevent="sendForm">
    <Preloader v-if="isLoaderActive" />
    <div>
      <label for="">Nombre </label>
      <input v-if="formCreate" type="text" v-model="patient.name" />
      <input v-else type="text" v-model="patientToEdit.name" />
    </div>
    <div>
      <label for="">Apellido </label>
      <input v-if="formCreate" type="text" v-model="patient.lastname" />
      <input v-else type="text" v-model="patientToEdit.lastname" />
    </div>
    <div>
      <label for="">Edad </label>
      <input v-if="formCreate" type="number" v-model="patient.age" />
      <input v-else type="text" v-model="patientToEdit.age" />
    </div>
    <div>
      <label for="">Prevision </label>
      <input v-if="formCreate" type="text" v-model="patient.prevision" />
      <input v-else type="text" v-model="patientToEdit.prevision" />
    </div>
    <div>
      <button v-if="formCreate" type="submit">{{ titleButton }}</button>
      <button v-else type="submit">Guardar edición</button>
    </div>
  </form>
</template>

<script>
import Preloader from "../components/Preloader.vue";

export default {
  name: "",
  data: () => ({
    patient: {
      name: null,
      lastname: null,
      age: null,
      prevision: null,
    },
    titleButton: "crear",
    isLoaderActive: false,
  }),
  props: {
    patientToEdit: { type: Object, require: true },
    formCreate: { type: Boolean, require: true },
  },
  components: { Preloader },
  methods: {
    sendForm() {
      if (this.formCreate) {
        // console.log("creando paciente");
        this.isLoaderActive = true;
        this.$store.dispatch("createNewPatient", this.patient);
        this.patient = {};
        setTimeout(() => {
          this.isLoaderActive = false;
        }, 1000);
      } else {
        // console.log("editando paciente", this.patientToEdit);
        this.isLoaderActive = true;
        this.$store.dispatch("editPatient", this.patientToEdit);
        setTimeout(() => {
          this.isLoaderActive = false;
        }, 1000);
      }
    },
  },
};
</script>
