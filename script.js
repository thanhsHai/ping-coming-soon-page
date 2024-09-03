"use strict";

let inputElement = document.querySelector("input");
let buttonElement = document.querySelector("button");
let labelElement = document.querySelector("label");

let validateEmail = function (email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

const handleSubmitBtnClick = function () {
  const email = inputElement.value;

  if (validateEmail(email)) {
    if (labelElement.classList.contains("display-block")) {
      labelElement.classList.remove("display-block");
    }

    if (inputElement.classList.contains("border-red")) {
      inputElement.classList.remove("border-red");
    }
  } else {
    if (!labelElement.classList.contains("display-block")) {
      labelElement.classList.add("display-block");
    }

    if (!inputElement.classList.contains("border-red")) {
      inputElement.classList.add("border-red");
    }
  }
};

buttonElement.addEventListener("click", handleSubmitBtnClick);
