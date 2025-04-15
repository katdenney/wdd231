//Getting zipcode for seed selection. reference https://opencagedata.com/
//PLAN:
//Reverse geocode coordinates to zip code (originally wanted to combine this with weather but seperate is better to reuse)
//my key 06dc8bd49e6740b8bb37d07c4e4e05af
// Use zip code to determine hardiness zone
//Map zip codes to zones json file?
//Filter plant cards based on zone from a JSON file
const openCageKey = "06dc8bd49e6740b8bb37d07c4e4e05af"
function getZipFromLocation(callback) {
    if (!navigator.geolocation) {
        console.error("Geolocation not supported");
        return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const geoUrl = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${openCageKey}`;

        try {
            const response = await fetch(geoUrl);
            if (!response.ok) throw new Error("Failed to fetch ZIP code");

            const data = await response.json();
            const zip = data.results[0]?.components?.postcode;

            if (zip) {
                console.log("Your ZIP code:", zip);
                callback(zip);
            } else {
                console.warn("ZIP code not found");
            }
        } catch (error) {
            console.error("Geolocation failed to get ZIP:", error);
        }
    }, (error) => {
        console.error("Geolocation error:", error.message);
    });
}

// display somewhere 
getZipFromLocation((zip) => {
    document.getElementById("user-zip").textContent = `Your ZIP Code is: ${zip}`;
});