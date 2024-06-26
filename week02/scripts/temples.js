// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').innerHTML = currentYear;

// Get the last modified date
const lastModified = document.lastModified;
document.getElementById('lastModified').innerHTML = `Last Modified: ${lastModified}`;

//hamburger menu
const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        if (hamburger.textContent === '\u2630') { 
            hamburger.textContent = 'X';
        } else {
            hamburger.textContent = '\u2630'; 
        }
    });   