import sumar from "./sumador";

const first = document.querySelector("#cadena");
const form = document.querySelector("#contador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let cadena=first.value;
  div.innerHTML = "<p>" +cadena + "</p>";
});
