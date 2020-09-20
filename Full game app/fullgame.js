var baseUrl = new URL ("https://games-world.herokuapp.com");
var allGames;

function Game (title, description, image) {
    this.title = title;
    this.description = description;
    this.imageUrl = image;
}

Game.prototype.showNewGames = function() {
    var gamesDiv = document.getElementById("gamesDiv");
    var gameTitle = document.createElement("h3");
    var gameDescription = document.createElement("p");
    var gameImage = document.createElement("img");
    gameTitle.innerText = this.title;
    gameDescription.innerText = this.description;
    gameImage.src = this.imageUrl;
    gamesDiv.appendChild(gameTitle);
    gamesDiv.appendChild(gameDescription);
    gamesDiv.appendChild(gameImage);
}
        
const gta = new Game ("GTA V", "Sandbox game", "https://st1.bgr.in/wp-content/uploads/2020/05/GTA-5-free-on-Windows-10-Epic-Games-Store-Feature-image.jpg");
const witcher = new Game ("The Witcher 3", "Action role-playing", "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Witcher_3_cover_art.jpg/220px-Witcher_3_cover_art.jpg");

addNewGames(gta, witcher);

gta.showNewGames();
witcher.showNewGames();


    fetch(baseUrl.href + "games", {method: "GET"})
        .then(function(response){
            return response.json();
        }).then(function(jsonResp){
            allGames = jsonResp;
            console.log(allGames);
            allGames.forEach(element => {
                showGames(element);
                });
            });
            

function showGames(game){
    var gamesDiv = document.getElementById("gamesDiv");
    var gameTitle = document.createElement("h3");
    var gameDescription = document.createElement("p");
    var gameImage = document.createElement("img");
    gameTitle.innerText = game.title;
    gameDescription.innerText = game.description;
    gameImage.src = game.imageUrl;
    gamesDiv.appendChild(gameTitle);
    gamesDiv.appendChild(gameDescription);
    gamesDiv.appendChild(gameImage);
}

function addNewGames(game){
    const promise = fetch(baseUrl + "games", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(game)
    }).then(function (response) {
        return response.json()
    });
    return promise;
}


