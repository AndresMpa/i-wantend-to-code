export const loadData = () => {
  const score = localStorage.getItem("score");
  console.log(score);

  if (score !== null) {
    document.querySelector("#score").textContent = score;
  } else {
    document.querySelector("#score").textContent = "0";
  }

  //console.log("Data from localStorage loaded " + document.querySelector("#score").textContent);
};
