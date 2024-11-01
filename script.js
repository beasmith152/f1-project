// Refresh Function
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible') {
      location.reload();
  }
});

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

// slideshow

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// Slideshow for Mobile
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 