const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];
const miUl = document.createElement("ul");
for (const album of albums) {
  const miLi = document.createElement("li");
  miLi.textContent = album;
  miUl.appendChild(miLi);
}
document.body.appendChild(miUl);
