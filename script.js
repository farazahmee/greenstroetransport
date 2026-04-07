// Counter Animation - Simple and Direct
(function() {
    console.log('Script loaded, waiting for DOM...');
    
    let hasAnimated = false;

    function runCounters() {
        console.log('Running counter animation...');
        if (hasAnimated) {
            console.log('Already animated, skipping');
            return;
        }

        const counters = document.querySelectorAll('.counter');
        console.log('Found ' + counters.length + ' counters');

        if (counters.length === 0) return;

        hasAnimated = true;

        // Counter targets
        const targets = [60, 2640, 2836, 75];

        counters.forEach((counter, i) => {
            console.log('Animating counter ' + i + ' to ' + targets[i]);
            
            let current = 0;
            const target = targets[i];
            const step = target / 100;

            const countdown = setInterval(() => {
                current += step;
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(countdown);
                } else {
                    counter.textContent = Math.floor(current);
                }
            }, 25);
        });
    }

    // Try to run on DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            console.log('DOMContentLoaded fired');
            setTimeout(runCounters, 500);
        });
    } else {
        console.log('DOM already loaded');
        setTimeout(runCounters, 500);
    }

    // Also listen to scroll
    window.addEventListener('scroll', () => {
        if (hasAnimated) return;

        const section = document.querySelector('.why-choose');
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const isVisible = (rect.top < window.innerHeight) && (rect.bottom > 0);

        if (isVisible) {
            console.log('Section visible, starting animation');
            runCounters();
        }
    }, { passive: true });

    // Run immediately if section is already visible
    window.addEventListener('load', () => {
        console.log('Page fully loaded');
        setTimeout(runCounters, 100);
    });
})();

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', () => {
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
});

// Newsletter form submission
document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with ${email}`);
            this.reset();
        });
    }
    console.log('GreenStone Transport website fully loaded');
});
