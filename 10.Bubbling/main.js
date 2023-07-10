// for (let elem of document.querySelectorAll("*")) {
//   elem.addEventListener(
//     "click",
//     (e) => alert(`Capturing: ${elem.tagName}`),
//     true
//   );
//   elem.addEventListener("onclick", { capture: true });
// }

let div = document.getElementById("div-element");
function changeColor() {
  div.style.backgroundColor = "blue";
}

let form = document.getElementById("button-form");
function changeColor2() {
  form.style.backgroundColor = "yellow";
}
div.addEventListener("click", (e) => changeColor());
button.addEventListener("click", { capture: true });
form.addEventListener("click", (e) => changeColor2());
