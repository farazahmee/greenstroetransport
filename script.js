/* =============================================
   GREENSTONE TRANSPORT - JAVASCRIPT
   Interactive Features & Functionality
   ============================================= */

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollAnimations();
    initializeFormHandling();
    initializePhoneLink();
});

/* =============================================
   NAVIGATION FUNCTIONALITY
   ============================================= */

function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Hamburger menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = event.target.closest('.nav-container');
        if (!isClickInsideNav && navMenu && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

/* =============================================
   SCROLL ANIMATIONS
   ============================================= */

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all service and fleet cards
    const cards = document.querySelectorAll('.service-card, .fleet-card, .stat-card, .testimonial-card, .info-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
}

/* =============================================
   FORM HANDLING
   ============================================= */

function initializeFormHandling() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            const message = this.querySelector('textarea').value;

            // Validate form
            if (!name || !email || !phone || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }

            // Validate email
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            // Prepare WhatsApp message
            const whatsappMessage = `Hello, I would like to inquire about GreenStone Transport services.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
            const whatsappUrl = `https://wa.me/971582953085?text=${encodeURIComponent(whatsappMessage)}`;

            // Show success and open WhatsApp
            showNotification('Redirecting to WhatsApp...', 'success');
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
                this.reset();
            }, 500);
        });
    }
}

/* =============================================
   PHONE LINK FUNCTIONALITY
   ============================================= */

function initializePhoneLink() {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    
    phoneLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Allow default behavior on mobile devices
            if (!isMobileDevice()) {
                e.preventDefault();
                // Copy to clipboard
                const phoneNumber = this.getAttribute('href').replace('tel:', '');
                copyToClipboard(phoneNumber);
                showNotification('Phone number copied to clipboard!', 'success');
            }
        });
    });
}

/* =============================================
   UTILITY FUNCTIONS
   ============================================= */

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
    } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
}

/* =============================================
   NOTIFICATION SYSTEM
   ============================================= */

function showNotification(message, type = 'info') {
    // Remove existing notification if present
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Add styles for notification
    const style = document.createElement('style');
    if (!document.querySelector('style[data-notification-style]')) {
        style.setAttribute('data-notification-style', 'true');
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 25px;
                border-radius: 8px;
                font-weight: 600;
                z-index: 9999;
                animation: slideInRight 0.3s ease-out;
            }

            .notification-success {
                background: #4ecca3;
                color: white;
            }

            .notification-error {
                background: #ff6b6b;
                color: white;
            }

            .notification-info {
                background: #4a9d6f;
                color: white;
            }

            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(100px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }

            @media (max-width: 480px) {
                .notification {
                    left: 20px;
                    right: 20px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Remove notification after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease-out reverse';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

/* =============================================
   SMOOTH SCROLLING
   ============================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* =============================================
   LAZY LOADING IMAGES
   ============================================= */

function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading when DOM is ready
initializeLazyLoading();

/* =============================================
   ACTIVE NAV LINK HIGHLIGHTING
   ============================================= */

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

updateActiveNavLink();

/* =============================================
   BACK TO TOP BUTTON
   ============================================= */

function initializeBackToTop() {
    const style = document.createElement('style');
    style.textContent = `
        .back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #1a472a 0%, #2d6a4f 100%);
            color: white;
            border: none;
            border-radius: 50%;
            font-size: 1.5rem;
            cursor: pointer;
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 999;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .back-to-top.show {
            display: flex;
        }

        .back-to-top:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 480px) {
            .back-to-top {
                bottom: 20px;
                right: 20px;
                width: 45px;
                height: 45px;
            }
        }
    `;
    document.head.appendChild(style);

    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

initializeBackToTop();

/* =============================================
   PAGE PERFORMANCE OPTIMIZATION
   ============================================= */

// Preload critical images
function preloadImages() {
    const images = [
        'https://images.unsplash.com/photo-1464219414658-64f116e4ecc9?w=500&h=350&fit=crop',
        'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=500&h=350&fit=crop',
        'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&h=350&fit=crop'
    ];

    images.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

window.addEventListener('load', preloadImages);

/* =============================================
   ANALYTICS TRACKING (Basic)
   ============================================= */

function trackEvent(eventName, eventData = {}) {
    // This is a placeholder for analytics tracking
    // In production, you would send this to your analytics service
    console.log('Event:', eventName, eventData);
}

// Track button clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        trackEvent('button_click', {
            buttonText: this.textContent,
            buttonClass: this.className
        });
    });
});

// Track form submissions
document.querySelector('.contact-form')?.addEventListener('submit', function() {
    trackEvent('form_submission', {
        formType: 'contact'
    });
});

/* =============================================
   CONSOLE LOG SUPPRESSION
   ============================================= */

// Optional: Hide console errors in production
if (window.location.hostname !== 'localhost') {
    window.onerror = function() {
        return true;
    };
}
