import {fetchWeather} from "./fetchweather.js";

async function populateUi (location) {
    let weatherData = await fetchWeather(location);
    document.querySelector("#location-name").textContent = weatherData.name;
    document.querySelector("#temperature").textContent = Math.floor(weatherData.main.temp);
    document.querySelector("#description").textContent = weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1);
    document.querySelector("#feels-like").textContent = Math.floor(weatherData.main.feels_like);
    document.querySelector("#wind").textContent = `WIND: ${Math.floor(weatherData.wind.speed*10)/10} m/s`;
    document.querySelector("#pressure").textContent = `PRESSURE: ${weatherData.main.pressure}`;
    document.querySelector("#humidity").textContent = `HUMIDITY: ${weatherData.main.humidity}%`;
};

export {populateUi};