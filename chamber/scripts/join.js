import { getTimeStamp } from './timestamp.js';
import { setupModals } from './modal.js';

document.addEventListener('DOMContentLoaded', ()=> {
    getTimeStamp();
    setupModals();
});
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const thankYouDetails = document.getElementById('thankyou-details');
  
    params.forEach((value, key) => {
      const li = document.createElement('li');
      if (key === 'timestamp') {
        const date = new Date(value);
        const formatted = date.toLocaleString(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        });
        li.innerHTML = `<strong>${key}:</strong> ${formatted}`;
      } else {
        li.innerHTML = `<strong>${key}:</strong> ${decodeURIComponent(value)}`;
      }
  
      thankYouDetails.appendChild(li);
    });
});

     
   