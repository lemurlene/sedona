let likes = Array.from(document.querySelectorAll('.photo__likes'));
let likesNumber = Array.from(document.querySelectorAll('.photo__likes-number'));
let likesLabel = Array.from(document.querySelectorAll('.photo__likes-label'));
let likesIcon = Array.from(document.querySelectorAll('.photo__likes-icon'));


likes.forEach((button, i) => {
  button.addEventListener("click", () => {
    button.classList.toggle("photo__likes--love");
    button.classList.contains("photo__likes--love") ? likesIcon[i].classList.add("photo__likes-icon--love") : likesIcon[i].classList.remove("photo__likes-icon--love");
    button.classList.contains("photo__likes--love") ? likesNumber[i].innerHTML++ : likesNumber[i].innerHTML--;
    button.classList.contains("photo__likes--love") ? likesLabel[i].textContent = 'Удалить лайк' : likesLabel[i].textContent = 'Поставить лайк';
  });
});
