const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (let i = 0, j = 0; i < foodSchedule.length && j < fruits.length; i++) {
  if (foodSchedule[i].isVegan == false) {
    foodSchedule[i].name = fruits[j];
    j++;
    foodSchedule[i].isVegan = true;
  }
}
console.log(foodSchedule);
