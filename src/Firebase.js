import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";

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
