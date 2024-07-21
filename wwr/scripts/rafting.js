// Function to set lazy loading for all images
function setLazyLoading() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
    });
}

function displayCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').innerHTML = currentYear;
}

function displayLastModified() {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').innerHTML = `Last Modified: ${lastModified}`;
}

function handleFormSubmission(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const trip = document.getElementById('trip').value;
    const email = document.getElementById('mail').value;
    const message = document.getElementById('msg').value;

    // Validate form data
    if (name && trip && email) {
        const formData = {
            name,
            trip,
            email,
            message
        };

        saveToLocalStorage(formData);

        displayFeedback('You are about to get a call within 24 hours. Thank You!');
    } else {
        displayFeedback('Please fill in all required fields.', true);
    }
}

function saveToLocalStorage(data) {
    let existingData = JSON.parse(localStorage.getItem('formData')) || [];

    existingData.push(data);

    localStorage.setItem('formData', JSON.stringify(existingData));

    logFormData(existingData);
}

function logFormData(dataArray) {
    console.log("Current form data:", dataArray);

    const specificTripEntries = dataArray.filter(entry => entry.trip.toLowerCase() === 'specific trip name'.toLowerCase());
    console.log("Entries for 'specific trip name':", specificTripEntries);
}

function displayFeedback(message, isError = false) {
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.style.display = 'block';
    feedbackElement.style.backgroundColor = isError ? 'red' : 'beige';
    feedbackElement.innerHTML = message;

    // Hide feedback after a few seconds
    setTimeout(() => {
        feedbackElement.style.display = 'none';
    }, 3000);
}

document.querySelector('form').addEventListener('submit', handleFormSubmission);

document.addEventListener('DOMContentLoaded', () => {
    displayCurrentYear();
    displayLastModified();
    setLazyLoading();
});
