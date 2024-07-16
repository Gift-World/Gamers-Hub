const gamesUrl = "http://localhost:3000/games";
function renderOneGame(game) {
  let card = document.createElement("li");
  card.className = "card";
  card.innerHTML = `
      <img src="${game.thumbnail}">
      <div class="content">
      <h4 id="title"> ${game.title} </h4>
      <h5 id="desc"> Genre :${game.genre}</h5>
      <p id="desc"> <span>Release Date:</span> ${game.release_date}</p>
      <p id="desc">${game.short_description}</p>
      
      <p id="desc"> Developer: ${game.developer}</p>
      <button id="favourites">Add to Favourites</button>
     
      
      
      `;
  document.querySelector("#gameList").appendChild(card);
  let btn = card.querySelector("#favourites");
  function handleAddToFavouritesButton(e) {
     btn = e.currentTarget;
    btn.textContent = "Added to Favourites";
    btn.disabled = true;
    btn.style.color="red"
    
  }
  btn.addEventListener("click", (handleAddToFavouritesButton))
}

function renderAllGames() {
  fetch("http://localhost:3000/games")
    .then((res) => res.json())
    .then((gameData) => gameData.forEach((game) => renderOneGame(game)));
}
function initialize() {
  renderAllGames();
}
initialize();
