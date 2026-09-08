// 1.1 - bucle del 0 al 9
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 1.2 - solo los pares
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 1.3 - contando ovejas, 10 vueltas
for (let i = 0; i < 10; i++) {
  if (i === 9) {
    console.log("¡Dormido!");
  } else {
    console.log("Intentando dormir 😴");
  }
}
