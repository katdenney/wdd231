const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');
async function getProphetData() {
    try {
        const response = await fetch(url); //fetching from API
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json(); //converting to JSON
        console.table(data.prophets); 
        
        displayProphets(data.prophets); //"referencing JSON data object not just the object"
    }
    catch (error) {
        console.error('Error fetching prophet data', error);
    }
    //console.table(data.prophets);
    
}
function displayProphets(prophets) {
    prophets.forEach((prophet) => {
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');
    
        fullName.textContent = `${prophet.name} ${prophet.lastname}`; //populate the element with the data

        portrait.setAttribute(`src`, prophet.imageurl);
        portrait.setAttribute(`alt`, `Portrait of ${prophet.fullName} ${prophet.lastname}`);
        portrait.setAttribute(`loading`,'lazy');

        card.appendChild(fullName);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}
getProphetData();








//  notes: Remember that functions are hoisted and therefore,
//  where ever you define the function in your main line of code
//  does not matter as it is available to the rest of the scoped code.