let likes = Array.from(document.querySelectorAll('.foto__likes'));
let likes_number = Array.from(document.querySelectorAll('.foto__likes-number'));

likes.forEach((button, i) => {
  button.addEventListener("click", () => {
    button.classList.toggle("foto__likes--love");
    button.classList.contains("foto__likes--love") ? likes_number[i].innerHTML++ : likes_number[i].innerHTML--;
  });
});
