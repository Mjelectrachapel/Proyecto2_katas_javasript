//1.1
const game = {
  title: "The Last of Us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};
const { title, gender, year } = game;
console.log(title);
console.log(gender);
console.log(year);

//1.2
const fruits = ["Banana", "Strawberry", "Orange"];
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

//1.3
const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};
const { name, race } = animalFunction();
console.log(name);
console.log(race);

//1.4
const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };
const { name: nombreCoche, itv } = car;
const [anio1, anio2, anio3] = itv;
console.log(nombreCoche);
console.log(itv);
console.log(anio1);
console.log(anio2);
console.log(anio3);
