// =========================
// Mobile Hamburger Menu
// DCDA 40833 Skills Portfolio
// =========================

// Wait for DOM to fully load before running menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get references to menu elements
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    const overlay = document.querySelector('.nav-overlay');
    const navLinks = document.querySelectorAll('nav a');

    // Toggle menu open/closed
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Update ARIA attribute for accessibility
        const isOpen = navMenu.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isOpen);
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    // Close menu function
    function closeMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    // Event Listeners
    
    // Toggle menu when hamburger button is clicked
    hamburger.addEventListener('click', toggleMenu);
    
    // Close menu when overlay is clicked
    overlay.addEventListener('click', closeMenu);

    // Close menu when any navigation link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu when Escape key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
});
