// Add animation to the portfolio items on hover
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.classList.add('animated');
    });

    item.addEventListener('mouseout', () => {
        item.classList.remove('animated');
    });
});