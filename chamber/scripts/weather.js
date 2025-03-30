//weather for home screen 
const apiKey = "4868785dd73be99d7a8c9cb3ef547b63"; //weather api key from open weather map
const lat = "37.2638"; 
const lon = "-122.0230";
const units = "imperial"; //fahrenheit
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

async function fetchWeather() {
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    displayCurrentWeather(data.list[0]); //weathernow
    displayThreeDayForecast(data.list); //3day
}

function displayCurrentWeather(current) {
    const weatherContainer = document.getElementById("current-weather");
    weatherContainer.textContent = ""; //clear content 

    const temp = Math.round(current.main.temp);
    const description = current.weather[0].description;
    const iconSrc = `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`;

    const icon = document.createElement("img");
    icon.src = iconSrc;
    icon.alt = description;

    const tempText = document.createElement("p");
    tempText.textContent = `${temp}°F`;


    const conditionText = document.createElement("p");
    conditionText.textContent = `${description.charAt(0).toUpperCase() + description.slice(1)}`;
    weatherContainer.appendChild(icon);
    weatherContainer.appendChild(tempText);
    weatherContainer.appendChild(conditionText);
}
function displayThreeDayForecast(forecastList) {
    const forecastContainer = document.getElementById("three-day-forecast");
    forecastContainer.textContent = ""; // Clear previous data
    const dailyForecasts = forecastList.filter(item => item.dt_txt.includes("12:00:00"));

    dailyForecasts.slice(0,3).forEach(day => { // Display next 3 days
        const date = new Date(day.dt * 1000).toLocaleDateString("en-US", { weekday: "long" });
        const temp = Math.round(day.main.temp);
        const iconSrc = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;
        const description = day.weather[0].description;

        const forecastCard = document.createElement("div");
        forecastCard.classList.add("forecast-card");

        const dayText = document.createElement("p");
        dayText.textContent = date;

        const icon = document.createElement("img");
        icon.src = iconSrc;
        icon.alt = description;

        const tempText = document.createElement("p");
        tempText.textContent = `${temp}°F`;

        forecastCard.appendChild(dayText);
        forecastCard.appendChild(icon);
        forecastCard.appendChild(tempText);

        forecastContainer.appendChild(forecastCard);
    });
}
document.addEventListener("DOMContentLoaded", fetchWeather);
