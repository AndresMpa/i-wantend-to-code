const PICKS = ["rock", "paper", "scissors", "spock", "lizard"];

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getRandomPick = () => PICKS[random(0, PICKS.length)];

export { PICKS, getRandomPick };
