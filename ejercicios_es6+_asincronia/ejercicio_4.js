const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

//4.1
const mayoresDe18 = ages.filter(function (age) {
  return age > 18;
});
console.log(mayoresDe18);

//4.2
const pares = ages.filter(function (age) {
  return age % 2 === 0;
});
console.log(pares);

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

//4.3
const jugadoresLOL = streamers.filter(function (streamer) {
  return streamer.gameMorePlayed === "League of Legends";
});
console.log(jugadoresLOL);

//4.4
const conU = streamers.filter(function (streamer) {
  return streamer.name.includes("u");
});
console.log(conU);

//4.5
const conLegends = streamers
  .filter(function (streamer) {
    return streamer.gameMorePlayed.includes("Legends");
  })
  .map(function (streamer) {
    if (streamer.age > 35) {
      return {
        ...streamer,
        gameMorePlayed: streamer.gameMorePlayed.toUpperCase(),
      };
    } else {
      return streamer;
    }
  });
console.log(conLegends);
