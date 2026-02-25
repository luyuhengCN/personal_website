// Academic Portfolio JavaScript Functionality

// Execute after page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize functions
    initMenuToggle();
    initFormSubmission();
    updateCurrentYear();
    initSmoothScroll();
    initActiveNavLink();
});

// Mobile menu toggle
function initMenuToggle() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');

            // Toggle menu icon
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu after clicking nav links
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });

        // Close menu when clicking elsewhere
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
}

// Form submission handling
function initFormSubmission() {
    const messageForm = document.getElementById('messageForm');

    if (messageForm) {
        messageForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            // Simple validation
            if (!formData.name || !formData.email || !formData.message) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }

            if (!isValidEmail(formData.email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Get Formspree endpoint from form action
            const formspreeEndpoint = messageForm.action;

            // Create FormData object from the form
            const formDataObj = new FormData(messageForm);

            // Show loading state
            const submitButton = messageForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Send form data to Formspree
            fetch(formspreeEndpoint, {
                method: 'POST',
                body: formDataObj,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Display success message
                    showMessage('Message sent! I will respond as soon as possible.', 'success');
                    // Reset form
                    messageForm.reset();
                } else {
                    // Display error message
                    showMessage('Failed to send message. Please try again later.', 'error');
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error:', error);
                showMessage('Network error. Please check your connection and try again.', 'error');
            })
            .finally(() => {
                // Restore button state
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;

                // Hide message after 3 seconds
                setTimeout(() => {
                    hideMessage();
                }, 3000);
            });
        });
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show message
function showMessage(text, type) {
    // Remove existing message
    hideMessage();

    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = text;

    // Add styles
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 4px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;

    // Set background color based on type
    if (type === 'success') {
        messageDiv.style.backgroundColor = '#4caf50';
    } else if (type === 'error') {
        messageDiv.style.backgroundColor = '#f44336';
    } else {
        messageDiv.style.backgroundColor = '#2196f3';
    }

    // Add to page
    document.body.appendChild(messageDiv);

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
}

// Hide message
function hideMessage() {
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
}

// Update footer current year
function updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
    }
}

// Smooth scroll
function initSmoothScroll() {
    // CSS scroll-behavior: smooth already provides basic smooth scrolling
    // Here we provide fallback for browsers that don't support it
    if (!('scrollBehavior' in document.documentElement.style)) {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');

        anchorLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                const targetId = this.getAttribute('href');

                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    event.preventDefault();

                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Subtract navbar height
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Activate current navigation link
function initActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Listen for scroll event
    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Add CSS styles to highlight active navigation link
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: var(--primary-color);
        font-weight: 600;
        position: relative;
    }

    .nav-links a.active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--primary-color);
    }
`;
document.head.appendChild(style);

// Image lazy loading (if images are added in the future)
function initLazyLoad() {
    if ('IntersectionObserver' in window) {
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

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Adjust on window resize
window.addEventListener('resize', function() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');

    // If window becomes wider, ensure mobile menu is closed
    if (window.innerWidth > 768 && navLinks) {
        navLinks.classList.remove('active');
        if (menuToggle) {
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
});

// Console welcome message
console.log('%c👋 Welcome to the academic portfolio!', 'color: #333; font-size: 18px; font-weight: bold;');
console.log('%cThis is an academic portfolio built with pure HTML, CSS, and JavaScript.', 'color: #666;');