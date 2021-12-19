export const pickHandler = (pick) => {
  const picking = document.querySelector("#picking");
  const board = document.querySelector("#board");

  const system = document.querySelector("#system");
  const user = document.querySelector("#user");

  board.style.display = "none";

  picking.classList.add("animate__animated", "animate__jackInTheBox");
  picking.style.display = "flex";
  console.log(picking);
  console.log(pick);
};
