export const loadData = () => {
  const point = localStorage.getItem("point");
  
  if (point !== null) {
    document.querySelector("#score").textContent = point;
  } else {
    document.querySelector("#score").textContent = "0";
  }

  //console.log("Data from localStorage loaded " + document.querySelector("#score").textContent);
};
