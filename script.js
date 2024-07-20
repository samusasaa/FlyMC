document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('h1, p');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('show');
        }, index * 500); // Stagger animations by 500ms
    });
});
