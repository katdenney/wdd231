//spotlight members on homepage
async function getSpotlightMembers() {
    const response = await fetch("data/members.json");
    const members = await response.json();

    const premiumMembers = members.filter(member => member.membership >=2);
    const selectedMembers = getRandomMembers(premiumMembers, 2 + Math.floor(Math.random()*2));

    displaySpotlight(selectedMembers);
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
        card.appendChild(img);

        //name
        const name = document.createElement("h3");
        name.textContent = member.name;
        card.appendChild(name);

        //address
        const address = document.createElement("p");
        address.textContent = member.address;
        card.appendChild(address);

        //phone
        const phone = document.createElement("p");
        phone.textContent = member.phone;
        card.appendChild(phone);

        //website... make a real link for a fake webpage ..ughhh 
        const website = document.createElement("a");
        website.href = member.website;
        website.target = "_blank"; //open new tab
        website.textContent = "Visit Website";
        card.appendChild(website);

        spotlightSection.appendChild(card);
    });
}
getSpotlightMembers();
