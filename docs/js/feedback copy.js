const sendFeedback =  document.querySelector(".feedback-form__button");
const fedbackSent = document.querySelector(".pop-up--sent");
const fedbackError = document.querySelector(".pop-up--error");
const popUpClose = document.querySelector(".pop-up__button");
const fedbackForm = document.querySelector(".feedback__form");
const fedbackName = document.querySelector("#feedback-name");
const fedbackSurname = document.querySelector("#feedback-surname");
const fedbackPhone = document.querySelector("#feedback-phone");
const fedbackMail = document.querySelector("#feedback-mail");

let isStorageSupport = true;
let storageName = "";
let storageSurname = "";
let storagePhone = "";
let storageMail = "";

try {
  storageName = localStorage.getItem("Name");
  storageSurname = localStorage.getItem("Surname");
  storagePhone = localStorage.getItem("Phone");
  storageMail = localStorage.getItem("Mail");
} catch (err) {
  isStorageSupport = false;
}

sendFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (storageName && storageSurname && storagePhone && storageMail) {
    fedbackName.value = storageName;
    fedbackSurname.value = storageSurname;
    fedbackPhone.value = storagePhone;
    fedbackMail.value = storageMail;
  }
});

fedbackForm.addEventListener("submit", function (evt) {
  if(!fedbackName.value || !fedbackSurname.value || !fedbackPhone.value || !fedbackMail.value) {
    evt.preventDefault();
    fedbackError.classList.add("pop-up_show");
    fedbackPopup.offsetWidth = fedbackPopup.offsetWidth;
  } else {
    if(isStorageSupport) {
     localStorage.setItem("Name", fedbackName.value);
     localStorage.setItem("Surname", fedbackSurname.value);
     localStorage.setItem("Phone", fedbackPhone.value);
     localStorage.setItem("Mail", fedbackMail.value);
     fedbackSent.classList.add("pop-up_show");
    }
  }
});









