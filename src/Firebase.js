import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
//Db connection
const firebaseConfig = {
  apiKey: "AIzaSyBXb4O0__vgM935FXjIdWaswkWLG68UOwg",
  authDomain: "fir-project-86a34.firebaseapp.com",
  databaseURL: "https://fir-project-86a34.firebaseio.com",
  projectId: "fir-project-86a34",
  storageBucket: "fir-project-86a34.appspot.com",
  messagingSenderId: "198264452225",
  appId: "1:198264452225:web:4e190893d225312504c980",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// var employeesRef = firestore.collection("employees");

// employeesRef.doc("C.Avilez").set({
//   fName: "Carlos",
//   lName: "Dikles",
//   email: "carlos.avilez@softtek.com",
//   age: 41,
//   gender: "Male",
//   yearsOfExperience: 9,
// });
// // employeesRef.doc("C.Olivia").set({
// //   fName: "Carla",
// //   lName: "Olivia",
// //   email: "carla.alivia@softtek.com",
// //   age: 39,
// //   gender: "Male",
// //   yearsOfExperience: 9,
// //   isFullTime: true,
// // });
// // employeesRef.doc("C.Gees").set({
// //   fName: "BB",
// //   lName: "Gees",
// //   email: "bb.gee@softtek.com",
// //   age: 39,
// //   gender: "Male",
// //   yearsOfExperience: 9,
// //   isFullTime: true,
// // });
// // employeesRef.doc("R.Perez").set({
// //   fName: "Rick",
// //   lName: "Perez",
// //   email: "ricardo.perez@softtek.com",
// //   age: 39,
// //   gender: "Male",
// //   yearsOfExperience: 9,
// //   isFullTime: true,
// // });
// // employeesRef.doc("C.Luna").set({
// //   fName: "Cesar",
// //   lName: "Luna",
// //   email: "cesar.luna@softtek.com",
// //   age: 39,
// //   gender: "Male",
// //   yearsOfExperience: 9,
// //   isFullTime: true,
// // });
// // employeesRef.doc("A.Lima").set({
// //   fName: "Alan",
// //   lName: "Lima",
// //   email: "alan.lima@softtek.com",
// //   age: 39,
// //   gender: "Male",
// //   yearsOfExperience: 9,
// //   isFullTime: true,
// // });
