/**
 * KENNEDY CHOGO LLC - INDUSTRIAL GRADE COMPONENT LOGIC (VANILLA JS)
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Sticky Header Navigation Transformation Matrix
    const header = document.querySelector('header');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger instantly on mount execution

    // Responsive Mobile Drawer Controller
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
        });

        // Auto-close menu drawer when navigating local tree
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }

    // High-Performance Native Scroll Animation (Intersection Observer API)
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Execution fire limit (once)
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: '0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});