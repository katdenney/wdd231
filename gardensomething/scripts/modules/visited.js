export function displayVisitMessage() {
    const visitMsg = document.querySelector('#visit-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
  
    if (!lastVisit) {
      visitMsg.textContent = "Welcome! Let us know if you have any questions.";
    } else {
      const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
      if (days < 1) {
        visitMsg.textContent = "We're glad to see you back so soon!";
      } else {
        visitMsg.textContent = `You last visited ${days} day${days === 1 ? '' : 's'} ago.`;
      }
    }
  
    localStorage.setItem('lastVisit', now);
  }