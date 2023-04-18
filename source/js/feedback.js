const sendFeedback =  document.querySelector(".feedback-form__button");
const fedbackSent = document.querySelector(".pop-up--sent");
const fedbackError = document.querySelector(".pop-up--error");
const popUpClose = document.querySelector(".pop-up__button");
const fedbackForm = document.querySelector(".feedback__form");
const fedbackName = document.querySelector("#feedback-name");
const fedbackSurname = document.querySelector("#feedback-surname");
const fedbackPhone = document.querySelector("#feedback-phone");
const fedbackMail = document.querySelector("#feedback-mail");

fedbackForm.addEventListener("submit", function (evt) {
  if(!fedbackName.value || !fedbackSurname.value || !fedbackPhone.value || !fedbackMail.value) {
    evt.preventDefault();
    fedbackError.classList.remove("pop-up_show");
    fedbackError.offsetWidth = fedbackError.offsetWidth;
    fedbackError.classList.add("pop-up_show");
  } else {
    fedbackSent.classList.add("pop-up_show");
    fedbackError.offsetWidth = fedbackError.offsetWidth;
  }
});

popUpClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  fedbackError.classList.remove("pop-up_show");
  fedbackSent.classList.remove("pop-up_show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (fedbackError.classList.contains("pop-up_show") || fedbackSent.classList.contains("pop-up_show")) {
      evt.preventDefault();
      fedbackError.classList.remove("pop-up_show");
      fedbackSent.classList.remove("pop-up_show");
    }
  }
});
