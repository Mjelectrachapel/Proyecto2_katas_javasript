const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const miUl = document.createElement("ul");
for (const country of countries) {
  const miLi = document.createElement("li");
  miLi.textContent = country;
  miUl.appendChild(miLi);
}
document.body.appendChild(miUl);

const elementoAEliminar = document.querySelector(".fn-remove-me");
elementoAEliminar.remove();

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const UlDos = document.createElement("ul");
for (const car of cars) {
  const miLi = document.createElement("li");
  miLi.textContent = car;
  UlDos.appendChild(miLi);
}
document.querySelector('[data-function="printHere"]').appendChild(UlDos);
