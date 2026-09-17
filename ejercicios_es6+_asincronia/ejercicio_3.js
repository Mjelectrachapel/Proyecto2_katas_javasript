//3.1
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];
const nombres = users.map(function (user) {
  return user.name;
});
console.log(nombres);

//3.2
const nombres2 = users.map(function (user) {
  if (user.name.startsWith("A")) {
    return "Anacleto";
  } else {
    return user.name;
  }
});
console.log(nombres2);

//3.3
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];
const visitados = cities.map(function (city) {
  if (city.isVisited == true) {
    return city.name + " (Visitado)";
  } else {
    return city.name;
  }
});
console.log(visitados);
