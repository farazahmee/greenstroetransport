// Counter animation for stats
let countersStarted = false;

function startCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    });
}

// Check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Listen for scroll events
window.addEventListener('scroll', function() {
    if (!countersStarted) {
        const statsSection = document.querySelector('.why-choose');
        if (statsSection && isElementInViewport(statsSection)) {
            countersStarted = true;
            startCounters();
        }
    }
}, false);

// Also check on page load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        if (!countersStarted) {
            const statsSection = document.querySelector('.why-choose');
            if (statsSection && isElementInViewport(statsSection)) {
                countersStarted = true;
                startCounters();
            }
        }
    }, 100);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with ${email}`);
        this.reset();
    });
}

// Mobile menu toggle (if needed in future)
document.addEventListener('DOMContentLoaded', function() {
    console.log('GreenStone Transport website loaded');
});
