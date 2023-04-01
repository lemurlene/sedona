let likes = Array.from(document.querySelectorAll('.foto__likes'));
let likes_number = Array.from(document.querySelectorAll('.foto__likes-number'));

likes.forEach((button, i) => {
  button.addEventListener("click", () => {
    button.classList.toggle("added");
    let current = Number(likes_number[i].innerHTML);
    let inc = button.classList.contains("added") ? 1 : -1;
    likes_number[i].innerHTML = current + inc;
  });
});
