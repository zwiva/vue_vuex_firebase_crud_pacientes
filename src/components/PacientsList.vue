<template>
  <div>
    <ul>
      <li v-for="pacient of pacients" :key="pacient.id">
        {{ pacient.name }} | 
        {{ pacient.lastname }} | 
        {{ pacient.prevision }} |
        {{ pacient.age }}
        <button @click="deleteUser">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PacientList",
  props: {
    pacients: { type: Array, require: true },
  },
  methods: {
    deleteUser() {
      console.log("eliminar usuario");
    },
  },
};
</script>
