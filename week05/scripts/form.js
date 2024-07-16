document.addEventListener('DOMContentLoaded', () => {
    // Products array for populating product options
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

    // Function to populate product options
    const populateProductOptions = () => {
        const productSelect = document.getElementById('productName');
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    };

    // Populate product options on form.html and review.html
    populateProductOptions();

    // Function to update the footer with current year and last modified date
    const updateFooter = () => {
        document.getElementById('currentyear').textContent = new Date().getFullYear();
        document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
    };

    // Update footer on form.html and review.html
    updateFooter();

    // Track number of reviews completed using localStorage
    const reviewForm = document.querySelector('form');
    if (reviewForm) {
        reviewForm.addEventListener('submit', () => {
            let reviewsCompleted = localStorage.getItem('reviewsCompleted');
            reviewsCompleted = reviewsCompleted ? parseInt(reviewsCompleted) + 1 : 1;
            localStorage.setItem('reviewsCompleted', reviewsCompleted);
        });
    }
});

// Display number of reviews completed on review.html
document.addEventListener('DOMContentLoaded', () => {
    const reviewsCompleted = localStorage.getItem('reviewsCompleted') || 0;
    const reviewsCompletedElement = document.getElementById('reviewsCompleted');
    if (reviewsCompletedElement) {
        reviewsCompletedElement.textContent = reviewsCompleted;
    }

    // Update current year in the footer
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});