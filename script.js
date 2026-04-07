// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const startCounting = () => {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            let current = 0;
            const increment = Math.ceil(target / 50);
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = current.toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString();
                }
            };
            updateCounter();
        });
    };
    
    // Trigger when section comes into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting();
                observer.unobserve(entry.target);
            }
        });
    });

    const statsSection = document.querySelector('.why-choose');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

animateCounters();

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
