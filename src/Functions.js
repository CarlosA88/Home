import firebase from "./Firebase";
import { auth } from "./Firebase";

export function signIn(email, password) {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(function (user) {
      alert("User account signed in");
    })
    .catch(function (error) {
      alert("User can not be sign in");
    });
}

export function signUp(email, password) {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(function (user) {
      alert("User account created");
    })
    .catch(function (error) {
      alert(error);
    });
}

export function getProfileData() {
  var user = auth.currentUser;
  if (user != null) {
    console.log("USER = ", user);
  } else {
    alert("There is no authenticated user");
  }
}

export function signOut() {
  auth
    .signOut()
    .then(function () {
      alert("User is sign out");
    })
    .catch(function (error) {
      alert("Something when wrong");
    });
}

export function updateProfile() {
  var user = auth.currentUser;
  if (user != null) {
    //
    user
      .updateProfile({
        displayName: "Test User",
      })
      .then(function () {
        alert("User name updated");
      })
      .catch((error) => {
        alert("User name updated");
      });
  } else {
    alert("There is no user");
  }
}

export function verifyUser() {
  var user = auth.currentUser;
  user
    .sendEmailVerification()
    .then(function () {
      alert("Email sent!");
    })
    .catch("Email not sent");
}

export function deleteUser() {
  var user = auth.currentUser;
  user
    .delete()
    .then(function () {
      alert("User deleted");
    })
    .catch(function (error) {
      alert("User not deleted");
    });
}
export function resetPassword() {
  var user = auth.currentUser;
  if (user !== null) {
    auth
      .sendPasswordResetEmail(user.email)
      .then(function () {
        alert("Email sent!");
      })
      .catch("Email not sent!");
  } else {
    alert("Please login");
  }
}

export function signInGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      alert("User authenticated");
      var user = result.user;
      console.log("User ===", user);
    })
    .catch(function (error) {
      alert("Authentication failed!");
    });
}

