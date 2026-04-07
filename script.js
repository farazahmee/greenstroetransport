// Counter Animation using Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Loaded - Starting counter setup');
    
    // Get all counters
    const counters = document.querySelectorAll('.counter');
    console.log('Found ' + counters.length + ' counter elements');
    
    // Counter data
    const data = [
        { counter: counters[0], target: 60 },
        { counter: counters[1], target: 2640 },
        { counter: counters[2], target: 2836 },
        { counter: counters[3], target: 75 }
    ];

    function startCount(counter, target) {
        console.log('Starting count to ' + target);
        let count = 0;
        const step = target / 150;
        
        const timer = setInterval(() => {
            count += step;
            if (count >= target) {
                counter.textContent = target;
                clearInterval(timer);
                console.log('Count finished: ' + target);
            } else {
                counter.textContent = Math.floor(count);
            }
        }, 20);
    }

    // Use Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Stats section visible - starting animations');
                data.forEach(item => {
                    if (item.counter) {
                        startCount(item.counter, item.target);
                    }
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observe the stats section
    const statsSection = document.querySelector('.stats-grid');
    if (statsSection) {
        console.log('Observing stats section');
        observer.observe(statsSection);
    } else {
        console.log('Stats section not found!');
    }
});

// Smooth scroll for navigation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    console.log('Smooth scroll setup complete');
});

// Newsletter
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.newsletter-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert('Thank you for subscribing with ' + email);
            this.reset();
        });
    }
});
