// Simple form submission message
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Please click on the paper plane to send.");
    document.getElementById("contactForm").reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

