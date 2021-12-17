const score = document.querySelector("#score");

score.addEventListener("click", (event) => {
  console.log(event.target);
  //import("./util").then((winner = getWinner(["spock", "lizard"])));
});

const rock = document.querySelector("#rock");


rock.addEventListener("click", (event) => {
  console.log(event.target);
});

const paper = document.querySelector("#paper");


paper.addEventListener("click", (event) => {
  console.log(event);
});
