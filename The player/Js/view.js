import {gameElements} from "./base.js"

export default class Game {
    
    renderCover(event){
        const coverTitle = document.createElement("h1");
        coverTitle.innerText = "The Player";
        gameElements.gameCover.appendChild(coverTitle);
    }

    renderPlayer(event){
        gameElements.gameCover.style.display = "none";
        gameElements.player.style.display = "block";
        gameElements.player.style.position = "absolute";
        gameElements.player.style.top = 200;
        gameElements.player.style.left = 200;
        }

    movePlayer(event){
        const modifier = 20;
        if(event.key == "ArrowRight" && parseInt(gameElements.player.style.left) < 400) {
            gameElements.player.style.left = `${parseInt(gameElements.player.style.left) + modifier}`;
        }else if(event.key == "ArrowLeft" && parseInt(gameElements.player.style.left) > 0) {
            gameElements.player.style.left = `${parseInt(gameElements.player.style.left) - modifier}`;
        }else if(event.key == "ArrowDown" && parseInt(gameElements.player.style.top) < 400) {
            gameElements.player.style.top = `${parseInt(gameElements.player.style.top) + modifier}`;
        }else if(event.key == "ArrowUp" && parseInt(gameElements.player.style.top) > 0) {
            gameElements.player.style.top = `${parseInt(gameElements.player.style.top) - modifier}`;
        }
    }
}
