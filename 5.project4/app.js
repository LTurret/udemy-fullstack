let hero = document.querySelector(".hero");
let animation = document.querySelector("section.animation-wrapper");

const time_line = new TimelineMax();

if (localStorage.getItem("login") == 1) {
  animation.remove();
}

time_line
  .fromTo(
    hero,
    1.2,
    { height: "0%" },
    { height: "100%", ease: Power2.easeInOut }
  )
  .fromTo(
    animation,
    0.3,
    { opacity: 1 },
    { opacity: 0, ease: Power2.easeInOut }
  );

setTimeout(() => {
  animation.remove();
  localStorage.setItem("login", 1);
}, 1500);

window.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
  }
});

let allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

let allSelect = document.querySelectorAll("select");
let allInput = document.querySelectorAll("input");
allInput.forEach((input) => {
  input.addEventListener("change", () => {
    setGPA();
  });
});
allSelect.forEach((select) => {
  select.addEventListener("change", () => {
    setGPA();
  });
});

function convertor(grade) {
  switch (grade) {
    case "A":
      return 4.0;
    case "A-":
      return 3.7;
    case "B+":
      return 3.4;
    case "B":
      return 3.0;
    case "B-":
      return 2.7;
    case "C+":
      return 2.4;
    case "C":
      return 2.0;
    case "C-":
      return 1.7;
    case "D+":
      return 1.4;
    case "D":
      return 1.0;
    case "D-":
      return 0.7;
    case "F":
      return 0.0;
    default:
      return 0;
  }
}

function setGPA() {
  let formLength = document.querySelectorAll("form").length;
  let credits = document.querySelectorAll(".class-credit");
  let selects = document.querySelectorAll("#select");
  let sum = 0;
  let creditSum = 0;

  for (let i = 0; i < credits.length; i++) {
    if (!isNaN(credits[i].valueAsNumber)) {
      creditSum += credits[i].valueAsNumber;
    }
  }

  for (let i = 0; i < formLength; i++) {
    if (!isNaN(credits[i].valueAsNumber)) {
      sum += credits[i].valueAsNumber * convertor(selects[i].value);
    }
  }

  let result;
  if (creditSum == 0) {
    result = 0;
  } else {
    result = sum / creditSum;
  }
  document.getElementById("result-gpa").innerText = result.toFixed(2);
}
