let dropdownBtn = document.getElementById("drop-text");
let list = document.getElementById("list");
let icon = document.getElementById("icon-dropdown");
let span = document.getElementById("span");
let characters = document.getElementById("characters");
let searchInput = document.getElementById("search-input");

const apiUrlFilt = "https://rickandmortyapi.com/api/character";

const searchCategories = {
  Name: "name",
  Name: "name",
  Species: "species",
  Status: "status",
  Gender: "gender",
  Type: "type",
};

dropdownBtn.onclick = function () {
  list.classList.toggle("show");
  icon.style.rotate = "-180deg";
};

window.onclick = function (e) {
  if (
    e.target.id !== "drop-text" &&
    e.target.id !== "span" &&
    e.target.id !== "icon-dropdown"
  ) {
    icon.style.rotate = "0deg";
  }
};

function fecthChar() {
  let query = searchInput.value.trim();
  let filtype = searchCategories[span.innerText] || "name";

  if (!query) {
    characters.innerHTML = "<p>Enter a search term...</p>";
    return;
  }

  let url = `${apiUrlFilt}?${filtype}=${query}`;
  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("Not results found");
      return res.json();
    })
    .then((data) => {
      displayChar(data.results);
    })
    .catch((error) => {
      console.error(error);
    });
}

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    fecthChar();
  }
});

list.addEventListener("click", (event) => {
  if (event.target.classList.contains("dropdown-list-item")) {
    span.innerText = event.target.innerText;
  }
});

function displayChar(chars) {
  characters.innerHTML = "";
  chars.forEach((char) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div class="card">
        <img src="${char.image}" alt="${char.name}">
        <h2>${char.name}</h2>
        <p><strong>Status: ${char.status} - Specie: ${char.species} - Gender: ${char.gender}</strong></p>
        `;
    characters.appendChild(card);
  });
}
