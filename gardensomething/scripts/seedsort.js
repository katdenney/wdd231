let allSeeds = [];

async function loadSeeds() {
    try{
        const response = await fetch('data/seeds.json');
        allSeeds = await response.json();
        displaySeeds(allSeeds); // veiw all
        setupZoneButtons();
    } catch (error) {
        console.error("Something is wrong..failed to load:",error);
    } 
}

function displaySeeds(seeds) {
    const container = document.getElementById("seed-container");
    container.innerHTML = `<p>Seeds loaded: ${seeds.length}</p>`; 
    container.innerHTML = ""; // Clear 
    seeds.forEach(seed => {
        const seedcard = document.createElement("div");
        seedcard.classList.add("seed-card");

        seedcard.innerHTML = `
            <img src="images/${seed.image}" alt="${seed.name}" loading="lazy" width="200">
            <h3>${seed.name}</h3>
            <p><strong>Type:</strong> ${seed.type}</p>
            <p>${seed.details}</p>
            <p><strong>Zone:</strong> ${seed.plantingzone}</p>
        `;

        container.appendChild(seedcard);
    });
}
function setupZoneButtons() {
    const buttons = document.querySelectorAll(".zone-buttons button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const [min, max] = button.dataset.zone.split("-").map(Number);
            const filtered = allSeeds.filter(seed =>
                seed.plantingzone >= min && seed.plantingzone <= max
            );
            displaySeeds(filtered);
        });
    });

}


document.addEventListener("DOMContentLoaded", loadSeeds);