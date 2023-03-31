const navToggle = document.querySelector(".main-nav__toggle");
const mainNav = document.querySelector(".main-nav");

navToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainNav.classList.toggle("main-nav--closed");
})
