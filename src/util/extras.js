const closeInstructions = document.querySelector("#closeInstructions");
const instruction = document.querySelector("#instruction");
const rules = document.querySelector("#rules");

export const displayRules = () => {
  rules.addEventListener("click", () => {
    if (instruction.style.display !== "flex") {
      instruction.style.display = "flex";
    } else {
      instruction.style.display = "none";
    }
  });

  closeInstructions.addEventListener("click", () => {
    instruction.style.display = "none";
  });
};
