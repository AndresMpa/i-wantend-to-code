(function () {
  "use strict";

  console.log("Data");
  import("./util").then(() => loadData());
})();

const score = document.querySelector("#score");

score.addEventListener("click", (event) => {
  console.log(event.target);
  //import("./util").then((winner = getWinner(["spock", "lizard"])));
});

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const lizard = document.querySelector("#lizard");
const spock = document.querySelector("#spock");

rock.addEventListener("click", (event) => {
  console.log(event.target);
});

paper.addEventListener("click", (event) => {
  console.log(event);
});

scissors.addEventListener("click", (event) => {
  console.log(event);
});

spock.addEventListener("click", (event) => {
  console.log(event);
});

lizard.addEventListener("click", (event) => {
  console.log(event);
});
