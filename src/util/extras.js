const closeInstructions = document.querySelector("#closeInstructions");
const instruction = document.querySelector("#instruction");
const rules = document.querySelector("#rules");

export const displayRules = () => {
  rules.addEventListener("click", () => {
    if (instruction.style.display !== "none") {
      instruction.style.display = "none";
    } else {
      instruction.style.display = "flex";
    }
  });

  closeInstructions.addEventListener("click", () => {
    instruction.style.display = "none";
  });
};
