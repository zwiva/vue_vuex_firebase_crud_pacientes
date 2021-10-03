<template>
  <div>
    <h1>Vista patientes</h1>
    <div>
      <h3>Todos los patientes</h3>
      <div>
        <patients-list :patients="patients" />
        <button @click="$store.dispatch('getAllPatients')">
          Actualizar lista pacientes
        </button>
      </div>
    </div>
    
    <div>
      <h3>Escoja una opcion:</h3>
      <button @click="showFormCreate()">Crear paciente</button>
      <button @click="showFormEdit()">Editar paciente</button>

      <div v-if="formCreate">
        <h3>Agregar nuevo paciente</h3>
        <patient-form />
      </div>

      <div v-if="formEdit">
        <h3>Agregar nuevo paciente</h3>
        <patient-form />
      </div>
    </div>
  </div>
</template>

<script>
import PatientsList from "../components/PatientsList.vue";
import PatientForm from "../components/PatientForm.vue";

export default {
  name: "Patients",
  components: {
    PatientsList,
    PatientForm,
  },
  data: () => ({
    patients: [],
    formCreate: false,
    formEdit: false,
  }),
  methods: {
    showFormCreate() {
      this.formCreate = !this.formCreate;
    },
    showFormEdit() {
      this.formEdit = !this.formEdit;
    },
  },
  mounted() {
    console.log("pacient");
    this.$store.dispatch("getAllPatients");
  },
};
</script>
