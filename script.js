let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let mybutton = document.getElementById("myBtn");

// Function to handle scroll event and highlight active section
function handleScroll() {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; // Offset for the section
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Check if the current scroll position is within the section
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // Remove active class from all links
                let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) {
                    activeLink.classList.add('active'); // Add active class to the current section link
                }
            });
        }
    });
}

// Scroll button visibility function
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block"; // Show button when scrolled down
    } else {
        mybutton.style.display = "none"; // Hide button when at the top
    }
}

// Toggle the menu visibility when the menu icon is clicked
menuIcon.onclick = (event) => {
    event.stopPropagation(); // Prevent the event from bubbling up to the document
    navbar.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
};

// Hide the menu when clicking outside the menu or the menu icon
document.onclick = (event) => {
    // Check if the click is outside the menu and menu icon
    if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
        navbar.classList.remove('active'); // Remove the 'active' class to hide the menu
    }
};

window.onscroll = () => {
    handleScroll(); // Handle active section highlighting
    scrollFunction(); // Handle scroll button visibility
};
