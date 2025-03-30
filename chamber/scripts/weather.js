//weather for home screen
const apiKey = "4868785dd73be99d7a8c9cb3ef547b63"; //weather api key from open weather map
const city = "Saratoga";
const units = "imperial"; //fahrenheit
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

async function fetchWeather() {
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    dislayWeather(data);
}
function displayWeather(data) {
    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;
}
const weatherContainer = document.getElementById("weather");
weatherContainer.innerHTML = "";
const p = document.createElement("p");
p.textContent = `${temp}°F - ${description.charAt(0).toUpperCase() + description.slice(1)}`;
weatherContainer.appendChild(p);

document.addEventListener("DOMContentLoaded", fetchWeather);