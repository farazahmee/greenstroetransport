// Counter animation for stats
let hasAnimated = false;

function animateCounters() {
    if (hasAnimated) return;
    
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        const speed = target / 100;
        
        const updateCounter = () => {
            current += speed;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };
        updateCounter();
    });
    hasAnimated = true;
}

// Trigger animation when user scrolls to the stats section
window.addEventListener('scroll', function() {
    const statsSection = document.querySelector('.why-choose');
    if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom > 0 && !hasAnimated) {
            animateCounters();
        }
    }
});

// Also trigger on page load if section is already visible
document.addEventListener('DOMContentLoaded', function() {
    const statsSection = document.querySelector('.why-choose');
    if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
            animateCounters();
        }
    }
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
