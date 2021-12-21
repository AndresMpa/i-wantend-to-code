//It hides the board and shows the result
const handleBoard = () => {
  const picking = document.querySelector("#picking");
  const board = document.querySelector("#board");

  board.style.display = "none";

  picking.classList.add("animate__animated", "animate__jackInTheBox");
  picking.style.display = "flex";
};

//Adds svg elements inside containers
const addPick = (obj, img) => {
  obj.parentNode.children[1].classList = "";
  obj.parentNode.children[1].classList.add(img);
  let html = `<img src="./assent/icon-${img}.svg" alt="${img}" srcset="" />`;
  obj.children[0].innerHTML = "";
  obj.children[0].insertAdjacentHTML("afterbegin", html);
};

//Adds the result of the current game
const addResult = (text) => {
  document.querySelector("#result").innerText = text;
};

//Display picks and animated them
const displayPicks = () => {
  const result = document.querySelector(".result");
  const system = document.querySelector("#system");
  const user = document.querySelector("#user");

  setTimeout(() => {
    system.classList.add("animate__animated", "animate__bounce");
    system.style.display = "flex";
  }, 1000);

  setTimeout(() => {
    user.classList.add("animate__animated", "animate__bounce");
    user.style.display = "flex";
  }, 2000);

  setTimeout(() => {
    result.classList.add("animate__animated", "animate__jackInTheBox");
    result.style.display = "flex";
  }, 3500);
};

//Change the score
const manageScore = (result) => {
  const score = document.querySelector("#score");
  setTimeout(() => {
    score.innerText = parseInt(score.innerText) + result;
    console.log(typeof score.innerText);
    localStorage.setItem("score", score.innerText);
  }, 3500);
};

export const pickHandler = (pick, result) => {
  handleBoard();
  addPick(system, pick[1]);
  addPick(user, pick[0]);
  addResult(result[0]);
  displayPicks();
  manageScore(result[1]);
};
