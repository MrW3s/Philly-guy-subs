// ===================================
// PHILLY GUY SUBS - MAIN JAVASCRIPT
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Navbar background on scroll
    const nav = document.querySelector('.main-nav');
    
    function updateNavbar() {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(255, 254, 249, 0.98)';
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            nav.style.background = 'var(--color-warm-white)';
            nav.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        }
    }

    window.addEventListener('scroll', updateNavbar);
    updateNavbar();

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm && formSuccess) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                contactForm.style.display = 'none';
                formSuccess.classList.add('show');
            }, 1500);
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .menu-item, .testimonial, .value-card, .faq-item, .team-member').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add animation class styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Add staggered animation delay to grid items
    document.querySelectorAll('.features-grid, .menu-items, .testimonials-grid, .values-grid, .faq-grid, .team-grid').forEach(grid => {
        const children = grid.children;
        Array.from(children).forEach((child, index) => {
            child.style.transitionDelay = `${index * 0.1}s`;
        });
    });

});

// Console Easter Egg
console.log('%c🥪 Philly Guy Subs', 'font-size: 24px; font-weight: bold; color: #C41E3A;');
console.log('%cReal Philly Cheesesteaks. No shortcuts. No compromises.', 'font-size: 14px; color: #1B365D;');
console.log('%cGo Birds! 🦅', 'font-size: 12px; color: #004C54;');
