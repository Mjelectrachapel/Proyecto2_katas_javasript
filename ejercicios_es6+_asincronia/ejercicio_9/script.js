async function cargarPokemonAleatorio() {
  const numeroAleatorio = Math.floor(Math.random() * 151) + 1;
  const url = "https://pokeapi.co/api/v2/pokemon/" + numeroAleatorio;

  const respuesta = await fetch(url);
  const pokemon = await respuesta.json();

  console.log(pokemon.sprites);

  const imagen = document.querySelector(".random-image");
  imagen.src = pokemon.sprites.front_default;
}

cargarPokemonAleatorio();
