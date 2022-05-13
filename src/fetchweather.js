async function fetchWeather (location, units) {
    try {
        const responseForLocation = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=baac41a7e5b76faee9dffe7731316230&units=${units}`, {mode: "cors"});
        const locationData = await responseForLocation.json();
        const responseForCoord = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${locationData.coord.lat}&lon=${locationData.coord.lon}&units=${units}&exclude=hourly,minutely,alerts&APPID=baac41a7e5b76faee9dffe7731316230`);
        const coordData = await responseForCoord.json();
        return locationData;
    } catch (err) {
        console.log(err);
    };
};

export {fetchWeather};