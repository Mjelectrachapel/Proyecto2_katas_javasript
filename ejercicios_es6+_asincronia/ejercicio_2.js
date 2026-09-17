//2.1
const pointsList = [32, 54, 21, 64, 75, 43];
const copia = [...pointsList];
console.log(copia);

//2.2
const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const copiaToy = { ...toy };
console.log(copiaToy);

//2.3
const pointsLis1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];
const ponitslistCopia = [...pointsLis1, ...pointsLis2];
console.log(ponitslistCopia);

//2.4
const toys = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };
const alltoys = { ...toys, ...toyUpdate };
console.log(alltoys);

//2.5
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];
const colors1 = colors.slice(0, 2);
const colors2 = colors.slice(3);
const newcolors = [...colors1, ...colors2];
console.log(newcolors);
