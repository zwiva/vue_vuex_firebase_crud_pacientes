<template>
  <div>
    <form @submit.prevent="" action="">
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
};
</script>

<style>
</style>