let likes = Array.from(document.querySelectorAll('.foto__likes'));
let likesNumber = Array.from(document.querySelectorAll('.foto__likes-number'));
let likesLabel = Array.from(document.querySelectorAll('.foto__likes-label'));

likes.forEach((button, i) => {
  button.addEventListener("click", () => {
    button.classList.toggle("foto__likes--love");
    button.classList.contains("foto__likes--love") ? likesNumber[i].innerHTML++ : likesNumber[i].innerHTML--;
    button.classList.contains("foto__likes--love") ? likesLabel[i].textContent = 'Удалить лайк' : likesLabel[i].textContent = 'Поставить лайк';
  });
});
