import { eventHandler } from "./util/eventHandler.js";
import { resetBoard } from "./util/resetBoard.js";
import { displayRules } from "./util/extras.js";
import { loadData } from "./util/loadData.js";

(() => {
  loadData();
  eventHandler();
  resetBoard();
  displayRules();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/serviceWorker.js", { scope: "/" })
      .catch((error) => {
        console.error(error);
      });
  }
})();
