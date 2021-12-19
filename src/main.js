import { eventHandler } from "./util/eventHandler.js";
import { resetBoard } from "./util/resetBoard.js";
import { loadData } from "./util/loadData.js";

(() => {
  loadData();
  eventHandler();
  resetBoard();
})();
