import { loadCards } from './modules/discovercards.js';
import { displayVisitMessage } from './modules/visited.js';

document.addEventListener('DOMContentLoaded', () => {
  loadCards();
  displayVisitMessage();
});