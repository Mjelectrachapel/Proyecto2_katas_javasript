const btnToClick = document.querySelector("#btnToClick");
btnToClick.addEventListener("click", function (event) {
  console.log(event);
});

const focus = document.querySelector(".focus");
focus.addEventListener("focus", function (event) {
  console.log(event.target.value);
});

const value = document.querySelector(".value");
value.addEventListener("input", function (event) {
  console.log(event.target.value);
});
