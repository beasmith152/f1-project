document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column'; // Ensure it displays correctly
        }
    }

    // Attach the toggleMenu function to the hamburger button
    document.querySelector('.hamburger').addEventListener('click', toggleMenu);
});