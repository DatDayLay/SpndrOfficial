// "use Strict";
// const email = document.getElementById("#email");
// const emailInput = document.getElementById("#email-input");
// const signUp = document.getElementById("#signup-btn");
// const fieldOne = document.getElementById("#field-1");

// signUp.addEventListener("click", function () {
//   if (emailInput === "") {
//     fieldOne.classList.remove("warning");
//   }4

//Mobile (page one)
const hamX = document.querySelector(".ham-x");
const hamDiv = document.querySelector(".ham-div");
const ham = document.querySelector(".hamburger-menu");
const home = document.querySelector(".mob-home");
const about = document.querySelector(".mob-about");
const features = document.querySelector(".mob-feat");
const pricing = document.querySelector(".mob-price");
const mobContact = document.querySelector(".mob-us");

ham.addEventListener("click", function () {
  hamDiv.classList.remove("hide");
  // ham.classList.add("hide");
});

hamX.addEventListener("click", function () {
  hamDiv.classList.add("hide");
  // ham.classList.remove("hide");
  console.log("juneeelad");
});
home.addEventListener("click", function () {
  hamDiv.classList.add("hide");
});

about.addEventListener("click", function () {
  hamDiv.classList.add("hide");

  // location.href = "#mob-why";
});
features.addEventListener("click", function () {
  hamDiv.classList.add("hide");
});
pricing.addEventListener("click", function () {
  hamDiv.classList.add("hide");
});
mobContact.addEventListener("click", function () {
  hamDiv.classList.remove("hide");
});
