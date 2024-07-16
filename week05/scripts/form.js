document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 'fc-1888',
            name: "flux capacitor",
            avgRating: 4.5
        },
        {
            id: 'fc-2050',
            name: "power laces",
            avgRating: 4.7
        },
        {
            id: 'fs-1987',
            name: "time circuits",
            avgRating: 3.5
        },
        {
            id: 'ac-2000',
            name: "low voltage reactor",
            avgRating: 3.9
        },
        {
            id: 'jj-1969',
            name: "warp equalizer",
            avgRating: 5.0
        }
    ];

    const productSelect = document.getElementById('productName');

    // Populate product options
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Get the current year
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').innerHTML = currentYear;

    // Get the last modified date
    const lastModified = document.lastModified;
    document.getElementById('lastModified').innerHTML = `Last Modified: ${lastModified}`;

});

// Track number of reviews completed using localStorage
const reviewForm = document.querySelector('form');
if (reviewForm) {
    reviewForm.addEventListener('submit', () => {
        let reviewsCompleted = localStorage.getItem('reviewsCompleted');
        reviewsCompleted = reviewsCompleted ? parseInt(reviewsCompleted) + 1 : 1;
        localStorage.setItem('reviewsCompleted', reviewsCompleted);
    });
}

