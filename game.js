document.addEventListener("DOMContentLoaded", () => {
const gamesUrl = "https://gamers-backend.vercel.app/games";
function renderOneGame(game) {
  let card = document.createElement("li");
  card.className = "card";
  card.innerHTML = `
      <img src="${game.thumbnail}">
      <div class="content">
      <h4 id="title"> ${game.title} </h4>
      <div id="detailsbox">
      <h5 id="desc"> Genre :${game.genre}</h5>
      <p id="desc"> <span>Release Date:</span> ${game.release_date}</p>
      <p id="desc">${game.short_description}</p>
      
      <p id="desc"> Developer: ${game.developer}</p>
      <button id="favourites">Add to Favourites</button>
      </div>
     
      
      
      `;

  document.querySelector("#gameList").appendChild(card);
  let titleGame = card.querySelector("#detailsbox");
  function handleMouseOut(e) {
    titleGame = e.currentTarget;
    if (titleGame) {
      titleGame.style.backgroundColor = "";
    }
  }

  function handleMouseOver(e) {
    titleGame = e.currentTarget;
    if (titleGame) {
      titleGame.style.backgroundColor = "#1aeeef";
      titleGame.style.transition = "2.5s";
    }
  }

  titleGame.addEventListener("mouseover", handleMouseOver);
  titleGame.addEventListener("mouseout", handleMouseOut);

  let btn = card.querySelector("#favourites");
  function handleAddToFavouritesButton(e) {
    btn = e.currentTarget;
    btn.textContent = "Added to Favourites";
    btn.disabled = true;
    btn.style.color = "red";
    btn.disabled = false;
  }
  btn.addEventListener("click", handleAddToFavouritesButton);
}

function renderAllGames() {
  fetch("https://gamers-backend.vercel.app/games")
    .then((res) => res.json())
    .then((gameData) => gameData.forEach((game) => renderOneGame(game)));
}
function initialize() {
  renderAllGames();
}

initialize();
})
