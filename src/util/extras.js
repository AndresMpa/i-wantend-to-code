const instruction = document.querySelector("#instruction")
const rules = document.querySelector("#rules");
const game = document.querySelector("#game");

export const displayRules = () => {
  rules.addEventListener("click", () => {
    console.log(instruction.style);
    if (instruction.style.display === "none") {
      instruction.style.display = "block";
      game.style.display = "none";
    } else {
      instruction.style.display = "none";
      game.style.display = "block";
    }
  });
};
