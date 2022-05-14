import {populateUi} from "./populateUi.js";

populateUi("tallinn");

document.querySelector("#search-button").addEventListener("click", () => {
    let locationName = document.querySelector("#location").value;
    populateUi(locationName);
    document.querySelector("#location").value = "";
});

document.querySelector("#location").addEventListener("keyup", (e) => {
    if(e.key === "Enter") {
        let locationName = document.querySelector("#location").value;
        populateUi(locationName);
        document.querySelector("#location").value = "";
    };
});