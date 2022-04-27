import './style.css';

const roll = () => {
  return Math.floor(Math.random() * 6) + 1;
};

console.log('funguju!');

import {Dice} from "./Dice/index.js"

const app = document.querySelector("#dice-row")
app.appendChild(Dice())
