<template>
  <div>
    <ul>
      <li>
        paciente ejemplo
        <button @click="deleteUser">Eliminar</button>
      </li>
      <li>
        paciente ejemplo
        <button @click="deleteUser">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PacientList",
  props: {},
  methods: {
    deleteUser() {
      console.log("eliminar usuario");
    },
  },
};
</script>

<style>
</style>