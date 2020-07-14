import firebase from "firebase/app";
// import { auth } from "./Firebase";
export function logIn(email, password) {
  debugger;
  console.log("LogIn - Email: " + email + ", Password: " + password);
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function (user) {
      alert("User account signed in");
    })
    .catch(function (error) {
      alert("User can not be sign in");
    });
}

export function register(email, password) {
  console.log("Register - Email: " + email + ", Password: " + password);
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (user) {
      alert("User account created");
    })
    .catch(function (error) {
      alert("User can not be created!");
    });
}
