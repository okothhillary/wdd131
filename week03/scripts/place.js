document.addEventListener('DOMContentLoaded', function () {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').innerHTML = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').innerHTML = `Last Modified: ${lastModified}`;

    const temperature = 9; // in degrees Celsius
    const windSpeed = 5; // in km/h

    function calculateWindChill(temp, windSpeed) {
        // Wind chill formula in Celsius
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
    }

    function displayWindChill() {
        let windChill = "N/A"; // Default value
        if (temperature <= 10 && windSpeed > 4.8) { // Check if conditions are met for wind chill calculation
            windChill = calculateWindChill(temperature, windSpeed).toFixed(2) + " °C"; // Calculate and format the wind chill
        }
        document.getElementById("windchill").textContent = windChill; 
    }

    displayWindChill();
});


