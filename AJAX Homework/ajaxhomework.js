var baseUrl = new URL ("https://games-world.herokuapp.com");
var allGames;


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
            
        

        