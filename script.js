// Counter animation when the stats section scrolls into view
document.addEventListener('DOMContentLoaded', function () {
    var statsSection = document.querySelector('.why-choose .stats-grid');
    if (statsSection) {
        var counters = statsSection.querySelectorAll('.counter');

        function animateCounter(el, target, duration) {
            var start = performance.now();
            function frame(now) {
                var t = Math.min((now - start) / duration, 1);
                var eased = 1 - Math.pow(1 - t, 3);
                var value = Math.floor(eased * target);
                el.textContent = value;
                if (t < 1) {
                    requestAnimationFrame(frame);
                } else {
                    el.textContent = target;
                }
            }
            requestAnimationFrame(frame);
        }

        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    counters.forEach(function (counter) {
                        var raw = counter.getAttribute('data-target');
                        var target = raw ? parseInt(raw, 10) : 0;
                        if (isNaN(target)) target = 0;
                        animateCounter(counter, target, 2000);
                    });
                    observer.unobserve(entry.target);
                });
            },
            { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
        );

        observer.observe(statsSection);
    }
});

// Smooth scroll for in-page anchors (same page only)
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                var el = document.querySelector(href);
                if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// Newsletter
document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.newsletter-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var email = this.querySelector('input[type="email"]').value;
            alert('Thank you for subscribing with ' + email);
            this.reset();
        });
    }
});
