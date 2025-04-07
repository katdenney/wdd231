//veiw grid & list on directory page 
document.addEventListener("DOMContentLoaded", () => {
    const gridViewBtn = document.getElementById("gridViewBtn");
    const listViewBtn = document.getElementById("listViewBtn");
    const directory = document.getElementById("directory");
});

//grid veiw
gridViewBtn.addEventListener("click", () => {
    directory.classList.remove("list-view");
    directory.classList.add("grid-view");
});

//list view
listViewBtn.addEventListener("click", () => {
    directory.classList.remove("grid-view");
    directory.classList.add("list-view");
});
getMembers();

async function getMembers() {
    try {
        const response = await fetch("data/members.json");
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error("Error fetching member data:", error);
    }
}

function displayMembers(members) {
    const directory = document.getElementById("directory");
    directory.innerHTML = ""; // Clear previous entries


    members.forEach(member => {
        const memberCard = document.createElement("div");
        if (!directory) {
            console.error("Error: #directory element not found!");
            return;
        }

        memberCard.classList.add("member-card");
        
        let membershipClass = "";
        if (member.membership === 3) membershipClass = "gold";
        else if (member.membership === 2) membershipClass = "silver";
        else membershipClass = "member";

        const img = document.createElement("img");
        img.src = `images/${member.image}`;
        img.alt = member.name;
        img.width = 153;
        img.height = 153;
        img.loading = "lazy";

        const name = document.createElement("h3");
        name.textContent = member.name;

        const address = document.createElement("p");
        address.innerHTML = `<strong>Address:</strong> ${member.address}`;

        const phone = document.createElement("p");
        phone.innerHTML = `<strong>Phone:</strong> ${member.phone}`;

        const website = document.createElement("a");
        website.href = member.website;
        website.textContent = "Visit Website";
        website.target = "_blank";

        const membership = document.createElement("p");
        membership.classList.add("membership", membershipClass);
        membership.textContent = `Membership Level: ${membershipClass.toUpperCase()}`;

        //elements to card
        memberCard.appendChild(img);
        memberCard.appendChild(name);
        memberCard.appendChild(address);
        memberCard.appendChild(phone);
        memberCard.appendChild(website);
        memberCard.appendChild(membership);

        directory.appendChild(memberCard);
    });
}

document.addEventListener("DOMContentLoaded", getMembers);
