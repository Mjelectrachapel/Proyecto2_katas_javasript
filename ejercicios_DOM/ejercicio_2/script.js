const Divempty = document.createElement("div");
document.body.appendChild(Divempty);

const Divp = document.createElement("div");
const miParrafo = document.createElement("p");
Divp.appendChild(miParrafo);
document.body.appendChild(Divp);

const Divloop = document.createElement("div");
for (let i = 0; i < 6; i++) {
  const parrafos = document.createElement("p");
  Divloop.appendChild(parrafos);
}
document.body.appendChild(Divloop);

const parrafolleno = document.createElement("p");
parrafolleno.textContent = "Soy dinámico!";
document.body.appendChild(parrafolleno);

document.querySelector(".fn-insert-here").textContent = "Wubba Lubba dub dub";

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const miUl = document.createElement("ul");
for (const app of apps) {
  const miLi = document.createElement("li");
  miLi.textContent = app;
  miUl.appendChild(miLi);
}
document.body.appendChild(miUl);

const elementosAEliminar = document.querySelectorAll(".fn-remove-me");
for (const elemento of elementosAEliminar) {
  elemento.remove();
}

const enmedio = document.querySelectorAll("div")[1];
const pEnMedio = document.createElement("p");
pEnMedio.textContent = "Voy en medio!";
enmedio.before(pEnMedio);

const elementosDentro = document.querySelectorAll("div.fn-insert-here");
for (const elemento of elementosDentro) {
  const pDentro = document.createElement("p");
  pDentro.textContent = "Voy dentro!";
  elemento.appendChild(pDentro);
}
