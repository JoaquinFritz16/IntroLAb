const apiUrlChar = "https://rickandmortyapi.com/api/character";

fetch(apiUrlChar)
  .then((response) => {
    if (!response.ok) {
      throw new Error("La respuesta de la Api no fue la esperada");
    }
    return response.json();
  })
  .then((data) => {
    document.getElementById("characters").innerHTML = data.results.map(personaje=>`
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div class="card">
      <img src="${personaje.image}" alt="${personaje.name}">
      <h2>${personaje.name}</h2>
      <p> <strong>Status: ${personaje.status} - Specie: ${personaje.species} - Gender: ${personaje.gender}</strong></p>
      `).join("");
  })
  .catch((error) => console.log(error));
