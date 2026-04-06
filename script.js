// Set footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Close mobile menu after clicking a link
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// Mobile menu toggle
document.querySelector('.mobile-menu').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Scroll animations
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Contact form handling
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', function (e) {
    const submitBtn = this.querySelector('.submit-btn');
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
});
