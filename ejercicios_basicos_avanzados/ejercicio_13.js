const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

function nameFinder(nameList, value) {
  const position = nameList.indexOf(value);
  if (position !== -1) {
    return { existe: true, posicion: position };
  }
  return { existe: false };
}
console.log(nameFinder(names, "Bruce"));
console.log(nameFinder(names, "Thanos"));
