const navToggle = document.querySelector(".main-nav__toggle");
const mainNav = document.querySelector(".main-nav");

navToggle.addEventListener("click", (evt) => {
  evt.preventDefault();
  mainNav.classList.toggle("main-nav--closed");
  let n = "true" === navToggle.getAttribute("aria-expanded");
    navToggle.setAttribute("aria-expanded", !n),
        n
            ? navToggle.setAttribute("aria-label", "Открыть меню")
            : navToggle.setAttribute("aria-label", "Закрыть меню");
})
