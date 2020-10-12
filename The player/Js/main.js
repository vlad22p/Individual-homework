import {gameElements} from "./base.js"
import * as functions from "./view.js"
import Game from "./view.js"

const game = new Game;
window.addEventListener("load", game.renderPlayer);
window.addEventListener("keydown", game.movePlayer);







 
