// Add event listener to theme toggle button
document.getElementById('theme-toggle').addEventListener('click', function() {
    // Toggle dark/light mode
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

// Set initial theme based on
