// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').innerHTML = currentYear;

// Get the last modified date
const lastModified = document.lastModified;
document.getElementById('lastModified').innerHTML = `Last Modified: ${lastModified}`;
