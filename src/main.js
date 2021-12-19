import { eventHandler } from './util/eventHandler.js';
import { loadData } from "./util/loadData.js";

(() => {
  loadData();
  eventHandler();
})();

window.addEventListener("click", (e) => {
  console.log(e.target);
});
