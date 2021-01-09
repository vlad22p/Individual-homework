import {gameElements} from "./base.js"
import * as functions from "./view.js"
import Game from "./view.js"

const game = new Game;
gameElements.startButton.addEventListener("click", game.renderPlayer);
window.addEventListener("keydown", game.movePlayer);
window.addEventListener("load", game.renderCover);








 
