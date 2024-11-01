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

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
  
    items.forEach(item => {
      item.addEventListener('click', (event) => {
        // Remove 'clicked' class from all items
        items.forEach(i => i.classList.remove('clicked'));
        // Add 'clicked' class to the clicked item
        item.classList.add('clicked');
        // Stop the event from propagating to the document
        event.stopPropagation();
      });
    });
  
    // Add a click event listener to the document
    document.addEventListener('click', () => {
      // Remove 'clicked' class from all items when clicking outside
      items.forEach(item => item.classList.remove('clicked'));
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('table img'); // Adjust the selector to match your table images

    images.forEach(img => {
        img.addEventListener('click', (event) => {
            event.preventDefault();
            const link = img.parentElement.href; // Assuming the image is inside an anchor tag
            img.classList.add('slide-out');

            img.addEventListener('animationend', () => {
                window.location.href = link;
            }, { once: true });
        });
    });
});

