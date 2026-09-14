const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];
function remove(list) {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].id !== 11 && list[i].id !== 40) {
      result.push(list[i]);
    }
  }
  return result;
}
console.log(remove(placesToTravel));
