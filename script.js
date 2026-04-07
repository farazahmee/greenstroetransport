// Ultra-reliable counter animation
(function() {
    let animated = false;

    function animate() {
        if (animated) return;

        const elements = document.querySelectorAll('.counter');
        const targets = [60, 2640, 2836, 75];

        elements.forEach((el, index) => {
            let count = 0;
            const target = targets[index] || 0;
            const speed = target / 100;

            const interval = setInterval(() => {
                if (count < target) {
                    count += speed;
                    el.innerText = Math.floor(count);
                } else {
                    el.innerText = target;
                    clearInterval(interval);
                }
            }, 30);
        });

        animated = true;
    }

    // Listen to scroll
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking && !animated) {
            window.requestAnimationFrame(() => {
                const section = document.querySelector('.why-choose');
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= window.innerHeight && rect.top >= -rect.height) {
                        animate();
                    }
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    // Try on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(animate, 100);
        });
    } else {
        setTimeout(animate, 100);
    }
})();

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
