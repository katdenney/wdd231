//using https://phzmapi.org/

import { setupModals } from './modules/modal.js';

document.addEventListener('DOMContentLoaded', ()=> {
    setupModals();

    const zipInput = document.getElementById('zipInput');
    const getZoneBtn = document.getElementById('getZoneBtn');
    const zoneResult = document.getElementById('zoneResult');
  
    getZoneBtn.addEventListener('click', async () => {
      const zip = zipInput.value.trim();
      //is it a zip code?
        //regular expression /.../
        //start of the string ^
        //digit(0-9) \d
        //number you want {here}
        //end of string $
      if (!/^\d{5}$/.test(zip)) {
        zoneResult.textContent = "Try again... enter a valid 5-digit ZIP code.";
        return;
      }
  
      try {
        zoneResult.textContent = "Looking up your zone...";
        const response = await fetch(`https://phzmapi.org/${zip}.json`);
        if (!response.ok) throw new Error('Cant find your zone');
        const data = await response.json();
        zoneResult.textContent = `Your Hardiness Zone is: ${data.zone}`;
      } catch (error) {
        zoneResult.textContent = "Sorry, we couldn't find that ZIP code.";
        console.error(error);
      }
    });
  });