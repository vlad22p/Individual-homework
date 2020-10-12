import {gameElements} from "./base.js"

export default class Game {
    
    renderPlayer(event){
    gameElements.player.style.position = "absolute";  
    gameElements.player.style.top = 0;
    gameElements.player.style.left = 0;
    }

    movePlayer(event){
        if(event.key == "ArrowRight" && parseInt(gameElements.player.style.left) < 400) {
            gameElements.player.style.left = `${parseInt(gameElements.player.style.left) + 50}`;
        }else if(event.key == "ArrowLeft" && parseInt(gameElements.player.style.left) > 0) {
            gameElements.player.style.left = `${parseInt(gameElements.player.style.left) - 50}`;
        }else if(event.key == "ArrowDown" && parseInt(gameElements.player.style.top) < 400) {
            gameElements.player.style.top = `${parseInt(gameElements.player.style.top) + 50}`;
        }else if(event.key == "ArrowUp" && parseInt(gameElements.player.style.top) > 0) {
            gameElements.player.style.top = `${parseInt(gameElements.player.style.top) - 50}`;
        }
    }
}
