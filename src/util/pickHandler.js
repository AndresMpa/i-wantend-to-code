export const pickHandler = (pick) => {
  const board = document.querySelector("#board");

  board.classList === ""
    ? board.classList = "hideBoard"
    : (board.style.display = "none");
};
