document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');
    const background = document.querySelector('.background');

    // Text reveal on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });

    // Background effect on mouse move
    document.addEventListener('mousemove', (e) => {
        const { clientX: x, clientY: y } = e;
        const { innerWidth: width, innerHeight: height } = window;

        const moveX = (x / width) * 30;
        const moveY = (y / height) * 30;

        background.style.backgroundPosition = `${moveX}px ${moveY}px`;
    });
});
