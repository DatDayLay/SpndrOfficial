// "use strict";
//PAGE 2 HTML CODE (SIGN UP PAGE CODE)
const emailInput = document.querySelector(".email-input");
const nameInput = document.querySelector(".username-input");
const passwordInput = document.querySelector(".password-input");
const signUp = document.querySelector(".pg2-signup");
const fieldOne = document.querySelector(".field");
const fieldTwo = document.querySelector(".field-2");
const fieldThree = document.querySelector(".field-3");
const submit = document.querySelector(".submission-div");
const submitText = document.querySelector(".submit-text");
const Space = document.querySelector(".break");
const exit = document.querySelector(".x");
fill = "";
// var match = /^([A-Za-z0-9\._]+)@([A-Za-z])+.([a-z])?$/;

const validate = function validateEmail(emailInput) {
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailInput.value.match(mailFormat)) {
    // alert("Valid email address!");
    // document.form1.text1.focus();
    fieldOne.classList.add("hide");
    emailInput.classList.remove("email-input");
    // document.querySelector(".input").style.borderColor = "green";
    return true;
  } else if (emailInput.value === fill) {
    fieldOne.classList.remove("hide");
    fieldOne.textContent = `Field Can't Be Empty`;
    // document.querySelector(".input").style.borderColor = "red";
    // emailInput.classList.remove("email-input");
  } else {
    // alert("You have entered an invalid email address!");
    fieldOne.classList.remove("hide");
    fieldOne.textContent = `Enter a valid email`;
    // document.form1.text1.focus();
    return false;
  }
};
const userValidate = function validateUsername(nameInput) {
  var nameFormat = /^[a-z-A-Z-0-9]/;
  if (nameInput.value.match(nameFormat)) {
    fieldTwo.classList.add("hide2");
    nameInput.classList.remove("username-input");
    // alert("Valid email address!");
    // console.log("faxxx");
    return true;
  } else if (nameInput.value === fill) {
    fieldTwo.classList.remove("hide2");
    fieldTwo.textContent = `Field Can't Be Empty`;
    // return false;
  } else {
    // // alert("You have entered an invalid email address!");
    fieldTwo.textContent = `Enter a valid username`;
    // // document.form1.text1.focus();
    return false;
  }
};
const passwordValidate = function validatePassword(passwordInput) {
  var passwordFormat = /^[a-z-A-Z-0-9]/;
  if (
    passwordInput.value.match(passwordFormat) &&
    passwordInput.value.length >= 8 &&
    passwordInput.value.length <= 20
  ) {
    fieldThree.classList.add("hide3");
    passwordInput.classList.remove("password-input");
    // alert("Valid email address!");
    // console.log("faxxx");
    return true;
  } else if (passwordInput.value === fill) {
    fieldThree.classList.remove("hide3");
    fieldThree.textContent = `Field Can't Be Empty`;
    passwordInput.classList.add("password-input");
    // return false;
  } else if (passwordInput.value.length < 8) {
    fieldThree.classList.remove("hide3");
    fieldThree.textContent = `Password too short(must be at least 8 characters)`;
    passwordInput.classList.add("password-input");
  } else if (passwordInput.value.length > 20) {
    fieldThree.classList.remove("hide3");
    fieldThree.textContent = `Password too long(must be less than 20 characters)`;
    passwordInput.classList.add("password-input");
  } else {
    // // alert("You have entered an invalid email address!");
    fieldThree.textContent = `Enter a valid password`;
    // // document.form1.text1.focus();
    return false;
  }
};
signUp.addEventListener("click", function () {
  validate(emailInput);
  userValidate(nameInput);
  passwordValidate(passwordInput);
  if (
    validate(emailInput) === true &&
    userValidate(nameInput) === true &&
    passwordValidate(passwordInput) === true
  ) {
    validate(emailInput);
    userValidate(nameInput);
    passwordValidate(passwordInput);
    submit.classList.remove("cancel");
    submitText.innerHTML = `Your submission has been received Welcome To SPNDR ${nameInput.value}`;
  } else {
    return false;
  }
});
exit.addEventListener("click", function () {
  submit.classList.add("cancel");
  emailInput.value = fill;
  nameInput.value = fill;
  passwordInput.value = fill;
  emailInput.classList.add("email-input");
  nameInput.classList.add("username-input");
  passwordInput.classList.add("password-input");
  document.querySelector(".input").style.borderColor = "none";
});
