let likes = Array.from(document.querySelectorAll('.foto__likes'));
let likes_number = Array.from(document.querySelectorAll('.foto__likes-number'));

likes.forEach((button, i) => {
  button.addEventListener("click", () => {
    button.classList.toggle("foto__likes--love");
    let current = Number(likes_number[i].innerHTML);
    let count = button.classList.contains("foto__likes-icon--love") ? 1 : -1;
    likes_number[i].innerHTML = current + count;
    likes_number.classList.toggle("foto__likes-number--love");
  });
});
