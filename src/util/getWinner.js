export const getWinner = (pick, options) => {
  if (options.beats.includes(pick[1]) && !options.lose.includes(pick[1])) {
    return ["YOU WIN", 1];
  }

  if (!options.beats.includes(pick[1]) && options.lose.includes(pick[1])) {
    return ["YOU LOSE", -1];
  }

  if (!options.beats.includes(pick[1]) && !options.lose.includes(pick[1])) {
    return ["DRAW", 0];
  }
};
