const loadData = () => {
  const point = localStorage.getItem("point");

  if (point) {
    document.querySelector("#score").value = point;
  } else {
    document.querySelector("#score").value = 0;
  }

  console.log("Data from localStorage loaded");
};

export default loadData;
