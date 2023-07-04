let a = document.querySelector(".a");
let b = document.querySelector(".b");

a.addEventListener("click", () => {
  alert("You have pressed red");
});

b.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("You have pressed blue");
});
