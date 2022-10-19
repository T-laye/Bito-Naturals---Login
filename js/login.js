// "use strict";

// alert("Welcome here");

const container = document.getElementById("container");
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const form = document.querySelector(".form-container");

signUpButton.addEventListener("click", () =>
  container.classList.add("right-panel-active")
);

signInButton.addEventListener("click", function () {
  container.classList.remove("right-panel-active");
});

// console.log(form);
