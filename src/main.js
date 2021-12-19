import { eventHandler } from './util/eventHandler.js';
import { loadData } from "./util/loadData.js";

(() => {
  loadData();
  eventHandler();
})();
