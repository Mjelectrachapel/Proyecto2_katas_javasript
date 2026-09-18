const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];
//6.1
const suma = exams.reduce(function (acumulador, numeroActual) {
  return acumulador + numeroActual.score;
}, 0);
console.log(suma);

//6.2
const sumaAprobados = exams.reduce(function (acumulador, numeroActual) {
  if (numeroActual.score >= 5) {
    return acumulador + numeroActual.score;
  } else {
    return acumulador + 0;
  }
}, 0);
console.log(sumaAprobados);

//6.3
const total = exams.reduce(function (acumulador, numeroActual) {
  return acumulador + numeroActual.score;
}, 0);
const media = total / exams.length;
console.log(media);
