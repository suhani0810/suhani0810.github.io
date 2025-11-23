// 1. NAVIGATION: Highlight the link for the current page
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    // Get the current filename (e.g., "about.html") from the URL
    const currentPath = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        // Check if the link matches the current page
        // OR if the current page is empty (root) and the link is index.html
        if (linkPath === currentPath || (currentPath === "" && linkPath === "index.html")) {
            link.classList.add('active');
        }
    });
});

// 2. CONTACT FORM: Simulate sending a message
// (Since we don't have a backend server yet, this gives visual feedback)
const contactForm = document.querySelector('form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the page from reloading
        
        // Show a success message
        alert("Thank you, Suhani! This is a demo form. On a real site, this would send an email.");
        
        // Clear the form inputs
        contactForm.reset();
    });
}

// script.js - Doughnut Chart Option
const ctx = document.getElementById('skillsChart');

if (ctx) {
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Python', 'SQL', 'Machine learning', 'Power BI','Tableau','MySQL','MongoDB'],
            datasets: [{
                data: [35, 25, 25, 15, 15, 20, 10], // These represent "Time Spent" or focus areas
                backgroundColor: [
                    'DeepSkyBlue', 
                    'HotPink', 
                    'Red', 
                    'Purple', 
                    'DarkGreen',
                    'Gold',
                    'Teal'
                ],
                borderColor: '#1f2937', // Matches your card background
                borderWidth: 5,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right', // Puts labels on the side
                    labels: { color: 'white', font: { size: 14 } }
                }
            },
            cutout: '70%', // Makes the ring thinner
        }
    });
}
const textElement = document.querySelector('.typewriter');
if (textElement) {
    const words = ["Data Scientist", "Computer Engineer", "Python Developer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 2000); // Wait before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500); // Wait before typing next word
        } else {
            setTimeout(type, isDeleting ? 100 : 200); // Speed of typing
        }
    }
    type();
}
// script.js

// Function to open/close the menu
function toggleMenu() {
    const sidebar = document.getElementById("mySidebar");
    sidebar.classList.toggle("open");
}

// Close the sidebar if the user clicks anywhere OUTSIDE of it
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById("mySidebar");
    const menuIcon = document.querySelector('.menu-icon');
    
    // If the click was NOT inside the sidebar AND NOT on the menu icon
    if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
        sidebar.classList.remove('open');
    }
});