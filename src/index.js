// call to 1st api to retrieve lat and long
// call to onecall api with lat and long from 1st api

import {fetchWeather} from "./fetchweather.js";

async function pepe (location) {
    let junn = await fetchWeather(location, "metric");
    console.log(junn)
};
pepe("tallinn");

document.querySelector("#search-button").addEventListener("click", () => {
    let locationName = document.querySelector("#location").value;
    pepe(locationName);
});