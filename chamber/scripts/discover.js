import { loadCards } from './discovercards.js';
import { displayVisitMessage } from './visited.js';

document.addEventListener('DOMContentLoaded', () => {
  loadCards();
  displayVisitMessage();
});