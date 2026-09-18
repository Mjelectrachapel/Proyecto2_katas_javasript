async function cargarPersonajes() {
  const respuesta = await fetch("https://thronesapi.com/api/v2/Characters");
  const personajes = await respuesta.json();
  const select = document.querySelector("#character-list");

  for (const personaje of personajes) {
    const opcion = document.createElement("option");
    opcion.textContent = personaje.fullName;
    select.appendChild(opcion);
  }
  const imagen = document.querySelector(".character-image");

  select.addEventListener("change", function (event) {
    const nombreSeleccionado = event.target.value;

    const personajeElegido = personajes.find(function (personaje) {
      return personaje.fullName === nombreSeleccionado;
    });

    imagen.src = personajeElegido.imageUrl;
  });
}
cargarPersonajes();
