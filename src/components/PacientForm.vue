<template>
  <div>
    <form @submit.prevent="changeForm" action="">
      <div>
        <label for="">Nombre</label>
        <input type="text" v-model="pacient.name" />
      </div>
      <div>
        <label for="">Apellido</label>
        <input type="text" v-model="pacient.lastname" />
      </div>
      <div>
        <label for="">Edad</label>
        <input type="text" v-model="pacient.age" />
      </div>
      <div>
        <label for="">Prevision</label>
        <input type="text" v-model="pacient.prevision" />
      </div>
      <div>
        <!-- mostrar en base a v-if -->
        <button @click="createPacient">Crear usuario</button>
        <button @click="editPacient">Editar usuario</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "",
  data: () => ({
    pacient: {
      name: null,
      lastname: null,
      age: 0,
      prevision: null,
    },
  }),
  methods: {
    changeForm() {
      console.log("usando formulario");
    },
    createPacient() {
      console.log("creando paciente");
    },
    editPacient() {
      console.log("editando paciente");
    },
  },
};
</script>

<style>
</style>