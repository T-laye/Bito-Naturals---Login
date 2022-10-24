// "use strict";

// alert("Welcome here");

const container = document.getElementById("container");
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const form = document.querySelector(".form-container");

// query//
const queryContainer = document.querySelector(".query-container");
const signContainer = document.querySelector(".sign-inpage");
const createBtn = document.querySelector(".create-btn");
const helloFriend = document.querySelector(".hello-friend");
const createForm = document.querySelector(".create-account");
const mobileSignUp = document.querySelector(".mobile-sign-up");
const welcomePage = document.querySelector(".welcome-page");
const logBtn = document.querySelector(".log-btn");
const welcomeBtn = document.querySelector(".welcome-btn");

signUpButton.addEventListener("click", function () {
  console.log("gukguk");
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", function () {
  container.classList.remove("right-panel-active");
});

// console.log(form);

createBtn.addEventListener("click", function () {
  console.log("clicked");

  signContainer.classList.add("overlay-top");
  helloFriend.classList.add("overlay-bottom");
});

mobileSignUp.addEventListener("click", function () {
  console.log("clickeddddddddddddd");
  createForm.classList.add("overlay-bottom--signup");
});

logBtn.addEventListener("click", function () {
  console.log("gerroutttttt");
  welcomePage.classList.add("overlay-bottom--welcome");
});

welcomeBtn.addEventListener("click", function () {
  console.log("xcghvhtttt");

  welcomePage.classList.remove("overlay-bottom--welcome");
  helloFriend.classList.remove("overlay-bottom");
  createForm.classList.remove("overlay-bottom--signup");
  // welcomePage.classList.add("overlay-signin");
});
