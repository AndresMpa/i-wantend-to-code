import { getRandomPick } from "./getRandomPick.js";
import { pickHandler } from "./pickHandler.js";
import { getCounter } from "./getCounter.js";
import { getWinner } from "./getWinner.js";

const playerPicks = [
  document.querySelector("#scissors"),
  document.querySelector("#lizard"),
  document.querySelector("#paper"),
  document.querySelector("#spock"),
  document.querySelector("#rock"),
];

export const eventHandler = () => {
  playerPicks.forEach((item) => {
    item.addEventListener("click", (event) => {
      let picked = [event.target.title, getRandomPick()];
      pickHandler(picked, getWinner(picked, getCounter(picked)));
    });
  });
};
