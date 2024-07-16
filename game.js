const gamesUrl = "http://localhost:3000/games";
function renderOneGame(game) {
  let card = document.createElement("li");
  card.className = "card";
  card.innerHTML = `
      <img src="${game.thumbnail}">
      <div class="content">
      <h4 id="title"> ${game.title} </h4>
      <p id="desc">${game.short_description}</p>
      
      `;
  document.querySelector("#gameList").appendChild(card);
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
