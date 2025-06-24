
import { validateAvatar } from "./avatarinputvalidate.js";
import { validateEmail, initEmailValidation } from "./emailvalidate.js";



function validateName() {
  const nameInput = document.getElementById("full-name");
  const name = nameInput.value.trim();
  const nameValidation = document.querySelector(".fullname-invalid");

  nameValidation.style.display = "none";

  if (!name) {
    nameValidation.textContent = "Full name is required";
    nameValidation.style.display = "flex";
    return false;
  }

  return true;
}

function ticketDate() {
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  document.getElementById("date").textContent = today.toLocaleDateString(
    undefined,
    options
  );
}


function updateConfirmation() {

  
  document.getElementById("name").textContent =
    document.getElementById("full-name").value;
  const email = document.getElementById("email-address").value;
  const confirmationText = document.querySelector(".conf-text p");
  const customerTicketName = document.querySelector(".customer-details h5");
  confirmationText.innerHTML = `We've emailed your ticket to <span>${email}</span> and will send updates in the run up to the event.`;
  customerTicketName.innerHTML = document.getElementById("full-name").value;


  const githubInput = document.getElementById("github-acc").value;
  if (githubInput) {
    document.querySelector(".github-details h6").textContent =
      githubInput.startsWith("@") ? githubInput : `@${githubInput}`;
  }


  ticketDate();
}

function handleFormSubmit(event) {
  event.preventDefault();

 
  const isAvatarValid = validateAvatar();
  const isNameValid = validateName();
  const isEmailValid = validateEmail();

 
  if (isAvatarValid && isNameValid && isEmailValid) {
   
    updateConfirmation();


    document.querySelector("form").style.display = "none";
    document.querySelector(".confirmation").style.display = "block";
  }
}


function init() {

  document.querySelector("form").addEventListener("submit", handleFormSubmit);


  initEmailValidation();


  document.querySelector(".confirmation").style.display = "none";


  ticketDate();
}

document.addEventListener("DOMContentLoaded", init);
