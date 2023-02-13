//Page 3 log in code

const nameInput = document.querySelector(".usrnm-input");
const passwordInput = document.querySelector(".pswrd-input");
const logIn = document.querySelector(".full-signup");
// const fieldOne = document.querySelector(".field");
const fieldTwo = document.querySelector(".field-2");
const fieldThree = document.querySelector(".field-3");
const submit = document.querySelector(".submission-div");
const submitText = document.querySelector(".submit-text");
// const Space = document.querySelector(".break");
const exit = document.querySelector(".x");
fill = "";

const userValidate = function validateUsername(nameInput) {
  var nameFormat = /^[a-z-A-Z-0-9]/;
  if (nameInput.value.match(nameFormat)) {
    fieldTwo.classList.add("hide2");
    nameInput.classList.remove("usrnm-input");
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
    passwordInput.classList.remove("pswrd-input");
    // alert("Valid email address!");
    // console.log("faxxx");
    return true;
  } else if (passwordInput.value === fill) {
    fieldThree.classList.remove("hide3");
    fieldThree.textContent = `Field Can't Be Empty`;
    passwordInput.classList.add("pswrd-input");
    // return false;
  } else if (passwordInput.value.length < 8) {
    fieldThree.classList.remove("hide3");
    fieldThree.textContent = `Password too short(must be at least 8 characters)`;
    passwordInput.classList.add("pswrd-input");
  } else if (passwordInput.value.length > 20) {
    fieldThree.classList.remove("hide3");
    fieldThree.textContent = `Password too long(must be less than 20 characters)`;
    passwordInput.classList.add("pswrd-input");
  } else {
    // // alert("You have entered an invalid email address!");
    fieldThree.textContent = `Enter a valid password`;
    // // document.form1.text1.focus();
    return false;
  }
};
logIn.addEventListener("click", function () {
  //   validate(emailInput);
  userValidate(nameInput);
  passwordValidate(passwordInput);
  if (
    // validate(emailInput) === true &&
    userValidate(nameInput) === true &&
    passwordValidate(passwordInput) === true
  ) {
    // validate(emailInput);
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
  //   emailInput.value = fill;
  nameInput.value = fill;
  passwordInput.value = fill;
  //   emailInput.classList.add("email-input");
  nameInput.classList.add("usrnm-input");
  passwordInput.classList.add("pswrd-input");
  document.querySelector(".input").style.borderColor = "none";
});
