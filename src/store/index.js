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
    // ver
    SET_PATIENTS(state, newpatients) {
      state.patients = newpatients;
      // console.log("state", state);
    },
    // crear
    CREATE_NEW_PATIENT(state, patient) {
      state.patients.push(patient);
    },
    // eliminar
    DELETE_PATIENT(state, patientid) {
      console.log("inside mutation -> patient.id", patientid);
      const patientToRemove = state.patients.filter(
        (patient) => patient.id === patientid
      );
      const indexOfPatient = state.patients.indexOf(patientToRemove[0]);
      console.log("index", indexOfPatient);
      state.patients.splice(indexOfPatient, 1);
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
          // console.log("se ejecuta action-get");
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
    createNewPatient(context, patient) {
      // console.log("data", patient);
      Firebase.firestore().collection("pacients").add(patient);

      context.commit("CREATE_NEW_PATIENT", patient);
    },

    // eliminar paciente
    deletePatient(context, patient) {
      Firebase.firestore().collection("pacients").doc(patient.id).delete();
      // console.log("inside actions -> patient.id", patient.id);
      context.commit("DELETE_PATIENT", patient.id);
    },
    // editar paciente
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
  },
  modules: {},
});
