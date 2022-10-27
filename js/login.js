// "use strict";

// alert("Welcome here");

const container = document.getElementById("container");
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const form = document.querySelector(".form-container");

signUpButton.addEventListener("click", function () {
  // console.log("gukguk");
  container.classList.add("right-panel-active");
  // container.classList.add("left-panel-active");
});

signInButton.addEventListener("click", function () {
  container.classList.remove("right-panel-active");
});

// Query
const signUpBtn = document.getElementById("sign-up-btn");
const signInBtn = document.getElementById("sign-in-btn");
const signInContainer = document.querySelector(".sign-in-container");
const signUpContainer = document.querySelector(".sign-up-container");
console.log(signInBtn, signUpBtn, signUpContainer, signInContainer);

signUpBtn.addEventListener("click", (e) => {
  signUpContainer.classList.toggle("active");
  signInContainer.classList.toggle("inactive");
  console.log("click");
});

signInBtn.addEventListener("click", (e) => {
  signUpContainer.classList.toggle("active");
  signInContainer.classList.toggle("inactive");
  console.log("click");
});

// console.log(form);

// createBtn.addEventListener("click", function () {
//   console.log("clicked");

//   signContainer.classList.add("overlay-top");
//   helloFriend.classList.add("overlay-bottom");
// });

// mobileSignUp.addEventListener("click", function () {
//   // console.log("clickeddddddddddddd");
//   createForm.classList.add("overlay-bottom--signup");
// });

// logBtn.addEventListener("click", function () {
//   // console.log("gerroutttttt");
//   welcomePage.classList.add("overlay-bottom--welcome");
// });

// welcomeBtn.addEventListener("click", function () {
//   // console.log("xcghvhtttt");

//   welcomePage.classList.remove("overlay-bottom--welcome");
//   helloFriend.classList.remove("overlay-bottom");
//   createForm.classList.remove("overlay-bottom--signup");
//   // welcomePage.classList.add("overlay-signin");
// });

////////////////////////////////////////////////
/////////Profile pic Upload
const imgDiv = document.querySelector(".profile-pic-div");
const img = document.querySelector("#photo");
const file = document.querySelector("#file");
const uploadBtn = document.querySelector("#uploadBtn");
const dispImg = document.querySelector("#profile-display-image");
const miniProImg = document.querySelector("#miniImg");

// hover effect
imgDiv.addEventListener("mouseenter", function () {
  uploadBtn.style.display = "block";
});

imgDiv.addEventListener("mouseleave", function () {
  uploadBtn.style.display = "none";
});

//Image showing functionality
file.addEventListener("change", function () {
  const chooseFile = this.files[0];

  if (chooseFile) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      e.preventDefault();
      img.setAttribute("src", reader.result);
      // miniProImg.setAttribute("src", reader.result);
      // dispImg.setAttribute("src", reader.result);
    });

    reader.readAsDataURL(chooseFile);
  }
});
