export const resetBoard = () => {
  const playAgain = document.querySelector("#playAgain");
  const picking = document.querySelector("#picking");
  const board = document.querySelector("#board");

  const result = document.querySelector(".result");
  const system = document.querySelector("#system");
  const user = document.querySelector("#user");

  playAgain.addEventListener("click", () => {
    picking.style.display = "none";
    board.style.display = "grid";

    result.style.display = "none";

    picking.classList.remove("animate__animated", "animate__jackInTheBox");
    system.classList.remove("animate__animated", "animate__bounce");
    user.classList.remove("animate__animated", "animate__bounce");
    result.classList.remove("animate__animated", "animate__jackInTheBox");
  });
};
