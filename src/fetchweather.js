async function fetchWeather (location) {
    try {
        const responseForLocation = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=baac41a7e5b76faee9dffe7731316230&units=metric`, {mode: "cors"});
        const locationData = await responseForLocation.json();
        return locationData;
    } catch (err) {
        console.log(err);
    };
};

export {fetchWeather};