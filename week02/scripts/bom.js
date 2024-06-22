document.addEventListener('DOMContentLoaded', function() {
    const addChapterButton = document.querySelector('button[type="submit"]');
    const favchapInput = document.getElementById('favchap');
    const chapterList = document.getElementById('list');

    addChapterButton.addEventListener('click', function() {
        const chapterTitle = favchapInput.value.trim(); // Remove whitespace from input

        // Check if the input is not blank
        if (chapterTitle !== '') {
            addChapter(chapterTitle); // Add the chapter to the list
            favchapInput.value = ''; // Clear the input field
        }

        favchapInput.focus(); // Focus back to the input field
    });

    function addChapter(title) {
        // Create li element
        const li = document.createElement('li');

        // Create span for chapter title
        const span = document.createElement('span');
        span.textContent = title;

        // Create delete button
        const button = document.createElement('button');
        button.textContent = 'Delete';
        button.className = 'delete-btn';
        button.addEventListener('click', function() {
            chapterList.removeChild(li); // Remove the li element
            favchapInput.focus(); // Focus back to the input field
        });

        // Append span and button to li
        li.appendChild(span);
        li.appendChild(button);

        // Append li to ul
        chapterList.appendChild(li);
    }
});
