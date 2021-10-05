<template>
  <div>
    <Preloader v-if="isLoaderActive" />
    <h1>Vista patientes</h1>
    <div>
      <h3>
        Todos los pacientes
        <button @click="refreshList">Actualizar lista pacientes</button>
      </h3>
      <div>
        <patients-list :patients="patients" @editPatient="editPatient" />
      </div>
    </div>
    <div>
      <h3>Acciones disponibles:</h3>

      <div>
        <button @click="showFormCreate">
          {{ titleCreation }} Formulario crear
        </button>

        <button @click="showFormEdit">
          {{ titleEdition }} Formulario editar
        </button>
      </div>

      <div v-if="formCreate">
        <h3>Agregar nuevo paciente</h3>
        <patient-form :formCreate="true" />
      </div>

      <div v-if="formEdit">
        <h3>Agregar nuevo paciente</h3>
        <patient-form :patientToEdit="patientToEdit" :formCreate="false" />
      </div>
    </div>
  </div>
</template>

<script>
import PatientsList from "../components/PatientsList.vue";
import PatientForm from "../components/PatientForm.vue";
import Preloader from "../components/Preloader.vue";

export default {
  name: "Patients",
  components: {
    PatientsList,
    PatientForm,
    Preloader,
  },
  data: () => ({
    patients: [],
    titleCreation: "Mostrar",
    titleEdition: "Mostrar",
    formCreate: false,
    formEdit: false,
    patientToEdit: {},
    isLoaderActive: false,
  }),
  methods: {
    showFormCreate() {
      this.isLoaderActive = true;
      this.formCreate = !this.formCreate;
      this.formCreate
        ? (this.titleCreation = "Ocultar")
        : (this.titleCreation = "Mostrar");
      setTimeout(() => {
        this.isLoaderActive = false;
      }, 1000);
    },
    showFormEdit() {
      this.isLoaderActive = true;
      this.formEdit = !this.formEdit;
      this.formEdit
        ? (this.titleEdition = "Ocultar")
        : (this.titleEdition = "Mostrar");
      setTimeout(() => {
        this.isLoaderActive = false;
      }, 1000);
    },
    editPatient(patient) {
      this.isLoaderActive = true;
      // console.log("patient to edit", patient);
      this.formEdit = !this.formEdit;
      this.patientToEdit = patient;
      this.$store.dispatch("editPatient", patient);
      this.formEdit
        ? (this.titleEdition = "Ocultar")
        : (this.titleEdition = "Mostrar");
      setTimeout(() => {
        this.isLoaderActive = false;
      }, 1000);
    },
    refreshList() {
      this.isLoaderActive = true;
      this.$store.dispatch("getAllPatients");
      setTimeout(() => {
        this.isLoaderActive = false;
      }, 1000);
    },
  },
  mounted() {
    // console.log("mounted patient");
    this.isLoaderActive = true;
    this.$store.dispatch("getAllPatients");
    setTimeout(() => {
      this.isLoaderActive = false;
    }, 2000);
  },
};
</script>
