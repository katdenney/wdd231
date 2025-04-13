//spotlight members on homepage
async function getSpotlightMembers() {
    const response = await fetch("data/companiesdata.json");
    const members = await response.json();

    const selectedMembers = getRandomMembers(members, 2 + Math.floor(Math.random()*2));

    displaySpotlight(selectedMembers);//just random spotlights 
}

function getRandomMembers(array,num) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0,num);
}

function displaySpotlight(members) {
    const spotlightSection = document.querySelector(".spotlights");

    spotlightSection.textContent = "";

    const heading = document.createElement("h2");
    heading.textContent = "Company Spotlights";
    spotlightSection.appendChild(heading);

    //member card
    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("spotlight-card");
        
        //image
        const img = document.createElement("img");
        img.src = `images/${member.image}`;
        img.alt = member.name;
        img.loading = "lazy";
        card.appendChild(img);

        //name
        const name = document.createElement("h3");
        name.textContent = member.name;
        card.appendChild(name);

        //address
        const address = document.createElement("p");
        address.textContent = member.address;
        card.appendChild(address);

        //description
        const description = document.createElement("p");
        description.textContent = member.description;
        card.appendChild(description);

        //website
        const website = document.createElement("a");
        website.href = member.website;
        website.target = "_blank"; //open new tab
        website.textContent = "Visit Website";
        card.appendChild(website);

        spotlightSection.appendChild(card);
    });
}
getSpotlightMembers();
