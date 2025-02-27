const apiUrlChar = "https://rickandmortyapi.com/api/character";

fetch(apiUrlChar)
  .then((response) => {
    if (!response.ok) {
      throw new Error("La respuesta de la Api no fue la esperada");
    }
    return response.json();
  })
  .then((data) => {
    ShowChar(data.results);
  })
  .catch((error) => console.log(error));
function ShowChar(character) {
  const container = document.getElementById("characters");
  card.classList.add("card");
  personajes.forEach((char) => {
    const card = document.createElement("div");
    card.innerHTML = `
  <img src="${char.image}" alt="${char.name}"></img>
  <h2>${char.name}</h2>
  <p>${char.status} - ${char.species} - ${char.gender}</p>
`;
    container.appendChild(card);
  });
}
