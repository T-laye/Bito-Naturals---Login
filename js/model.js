"use strict";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
import {
  getAuth,
  // connectAuthEmulator,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js";
// import { firestore } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuvqd5vY9lr6hw3UiXwOlAy7odt-YGN4A",
  authDomain: "bito-naturals-13fc2.firebaseapp.com",
  projectId: "bito-naturals-13fc2",
  storageBucket: "bito-naturals-13fc2.appspot.com",
  messagingSenderId: "577214822635",
  appId: "1:577214822635:web:04841fb91a9d876c33a6ae",
  measurementId: "G-MR134BFF88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const signUpButton = document.getElementsByClassName("sign_up");
const signUpBtns = Array.from(signUpButton);

const signInButton = document.getElementsByClassName("sign_in");
const signInBtns = Array.from(signInButton);

// console.log(photo);
const fileInput = document.getElementById("file");
const file = fileInput.files[0];
console.log(file);
fileInput.addEventListener("change", function (e) {
  const photo = document.getElementById("photo");
  console.log(e.target.files[0]);
  console.log(photo.src);
});

signUpBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const userName = document.getElementById("userName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // user.displayName = userName.value;
        const userId = userCredential.user.uid;

        updateProfile(auth.currentUser, {
          displayName: userName,
          // photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            alert("Successful Registration, please Sign In");
            console.log(user);
            window.open("http://127.0.0.1:5500/Bito%20Login/login.html");
            // ...

            try {
              const docRef = addDoc(collection(db, "users"), {
                username: userName,
                email: email,
                password: password,
                // phoneNumber: phone,
              });
              const fileInput = document.getElementById("file");
              const storage = getStorage(app);

              // fileInput.addEventListener("change", function (e) {
              const file = fileInput.files[0];
              console.log(file + "hi");
              const storageRef = ref(storage, `profile-pic/${userId}`);
              uploadBytes(storageRef, file)
                .then((snapshot) => {
                  // alert("Uploaded a blob or file!");
                  console.log();
                })
                .catch((e) => {
                  alert(e);
                });
              // });
            } catch (e) {
              console.error("Error adding document: ", e);
            }
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage, errorCode);
      });
  });
});

const email = document.getElementById("signInEmail").value;
// console.log(email);
const password = document.getElementById("signInPassword").value;

signInBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(btn);

    console.log(email);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.open("http://127.0.0.1:5500/Bito%20Dash%20Board/dashboard.html");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // alert(errorMessage);
      });
  });
});

///////////////////////////////////////////////////////
//Query form
signUpBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const userName2 = document.querySelector(".userName").value;
    const email2 = document.querySelector(".email").value;
    const password2 = document.querySelector(".password").value;

    createUserWithEmailAndPassword(auth, email2, password2)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // user.displayName = userName.value;
        const userId = userCredential.user.uid;

        updateProfile(auth.currentUser, {
          displayName: userName2,
          // photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            alert("Successful Registration, please Sign In");
            console.log(user);
            window.open("http://127.0.0.1:5500/Bito%20Login/login.html");
            // ...

            try {
              const docRef = addDoc(collection(db, "users"), {
                username: userName2,
                email: email2,
                password: password2,
                // phoneNumber: phone,
              });
              const fileInput = document.getElementById("file");
              const storage = getStorage(app);

              // fileInput.addEventListener("change", function (e) {
              const file = fileInput.files[0];
              console.log(file + "hi");
              const storageRef = ref(storage, `profile-pic/${userId}`);
              uploadBytes(storageRef, file)
                .then((snapshot) => {
                  // alert("Uploaded a blob or file!");
                  console.log();
                })
                .catch((e) => {
                  alert(e);
                });
              // });
            } catch (e) {
              console.error("Error adding document: ", e);
            }
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage, errorCode);
      });
  });
});

const email2 = document.querySelector(".signInEmail").value;
// console.log(email);
const password2 = document.querySelector(".signInPassword").value;

signInBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(btn);

    console.log(email);
    signInWithEmailAndPassword(auth, email2, password2)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.open("http://127.0.0.1:5500/Bito%20Dash%20Board/dashboard.html");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // alert(errorMessage);
      });
  });
});
