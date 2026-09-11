const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  let total = 0;
  let media = 0;
  for (let i = 0; i < numberList.length; i++) {
    total += numberList[i];
  }
  media = total / numberList.length;
  return media;
}
console.log(average(numbers));
