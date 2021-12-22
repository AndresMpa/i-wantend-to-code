export const loadData = () => {
  const score = localStorage.getItem("score");

  if (score !== null) {
    document.querySelector("#score").textContent = score;
  } else {
    document.querySelector("#score").textContent = "0";
  }
};
