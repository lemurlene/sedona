const navToggle = document.querySelector(".main-nav__toggle");
const mainNav = document.querySelector(".main-nav");
const toggleLabel = document.querySelector(".main-nav__toggle-label");
const headerLogo = document.querySelector(".page-header__logo");


mainNav.classList.add('main-nav--closed');
navToggle.classList.add('main-nav__toggle--js');

navToggle.addEventListener("click", (evt) => {
  evt.preventDefault();
  mainNav.classList.toggle("main-nav--closed");
  mainNav.classList.toggle("main-nav--js");
  headerLogo.classList.toggle('page-header__logo--js');
  toggleLabel.textContent === 'Закрыть меню' ? toggleLabel.textContent = 'Открыть меню' : toggleLabel.textContent = 'Закрыть меню';
})
