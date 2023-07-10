let danger = document.querySelector(".danger");
let body = document.querySelector("body");

let times = localStorage.getItem("times");
if (times >= 1) {
  danger.innerText = `你點到${times}次了啦`;
}

danger.addEventListener("click", () => {
  if (isNaN(localStorage.getItem("times"))) {
    localStorage.setItem("times", JSON.stringify(0));
  }
  let counts = JSON.parse(localStorage.getItem("times"));
  counts++;
  body.remove();
  localStorage.setItem("times", JSON.stringify(counts));
});
