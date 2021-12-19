export const getWinner = (pick, options) => {
  if (options.beats.includes(pick[1]) && !options.lose.includes(pick[1])) {
    console.log("Win");
  }

  if (!options.beats.includes(pick[1]) && options.lose.includes(pick[1])) {
    console.log("Lose");
  }

  if (!options.beats.includes(pick[1]) && !options.lose.includes(pick[1])) {
    console.log("Draw");
  }
};
