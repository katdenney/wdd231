export async function loadCards() {
    const container = document.querySelector('.cards-container');
  
    try {
      const response = await fetch('data/discover.json');
      const data = await response.json();
  
      data.forEach(item => {
        const card = document.createElement('section');
        card.classList.add('card');
        card.innerHTML = `
          <h2>${item.name}</h2>
          <figure><img src="images/${item.image}" alt="${item.name}" loading="lazy"></figure>
          <address>${item.address}</address>
          <p>${item.description}</p>
          <button>Learn More</button>`;
        container.appendChild(card);
      });
    } catch (error) {
      console.error("Error loading cards:", error);
    }
  }