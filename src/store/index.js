import Vue from "vue";
import Vuex from "vuex";
import Firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    patients: [],
  },
  getters: {},
  mutations: {
    SET_PATIENTS(state, newpatients) {
      state.patients = newpatients;
      console.log("state", state);
    },
    CREATE_NEW_PATIENT(state, patient) {
      state.patients.push(patient);
    },
  },
  actions: {
    //ver todos los pacientes:
    getAllPatients(context) {
      Firebase.firestore()
        .collection("pacients")
        .get()
        .then((collection) => {
          const patients = [];
          collection.forEach((document) => {
            patients.push({ id: document.id, ...document.data() });
          });
          console.log("se ejecuta action-get");
          context.commit("SET_PATIENTS", patients);
        });

      // refreshList(context) {
      // Firebase.firestore()
      //   .collection("patients")
      //   .onSnapshot((querySnapshot) => {
      //     const patients = [];
      //     querySnapshot.forEach((document) => {
      //       this.patients.push({ id: document.id, ...document.data() });
      //       context.commit("SET_PATIENTS", patients);
      //     });
      //   });
    },

    // crear nuevo paciente
    createNewPacient(context, patient) {
      console.log("data", patient);
      Firebase.firestore().collection("pacients").add(patient);

      context.commit("CREATE_NEW_PATIENT", patient);
    },

    // // editar paciente
    // editPatient(context, patient) {
    //   Firebase.firestore()
    //     .collection("pacients")
    //     // .get()
    //     .then((collection) => {
    //       const patients = [];
    //       collection.forEach((document) => {
    //         patients.push({ id: document.id, ...document.data() });
    //       });
    //       console.log("se ejecuta edit");
    //       context.commit("EDIT_PATIENT", patient);
    //     });
    // },

    // // eliminar paciente
    // detelePacient(context, pacient) {
    //   Firebase.firestore()
    //     .collection("pacients")
    //     .get()
    //     .then((collection) => {
    //       const patients = [];
    //       collection.forEach((document) => {
    //         patients.push({ id: document.id, ...document.data() });
    //       });
    //       console.log("se ejecuta action-get");
    //       context.commit("SET_PATIENTS", patients);
    //     });
    // },
  },
  modules: {},
});
