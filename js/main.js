/**
 * Mali Customs Website - JavaScript
 * Main functionality and interactions
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    const menuBar = document.querySelector('.menu-bar');
    const mainMenu = document.querySelector('.main-menu');
    const hamburger = document.querySelector('.hamburger');

    if (menuBar && mainMenu) {
        menuBar.addEventListener('click', function () {
            mainMenu.classList.toggle('active');
            hamburger.classList.toggle('active');

            // Animate hamburger to X
            const spans = hamburger.querySelectorAll('span');
            if (hamburger.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // ============================================
    // STICKY HEADER
    // ============================================
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop;
    });

    // ============================================
    // SUBMENU BEHAVIOR (Mobile)
    // ============================================
    const menuItemsWithSubmenu = document.querySelectorAll('.has-submenu > a');

    menuItemsWithSubmenu.forEach(item => {
        item.addEventListener('click', function (e) {
            // Only prevent default on mobile
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const parent = this.parentElement;
                const submenu = parent.querySelector('.submenu');

                if (submenu) {
                    parent.classList.toggle('submenu-open');

                    if (parent.classList.contains('submenu-open')) {
                        submenu.style.display = 'block';
                    } else {
                        submenu.style.display = 'none';
                    }
                }
            }
        });
    });

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Ignore empty anchors
            if (href === '#' || href === '#!') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (mainMenu.classList.contains('active')) {
                    mainMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });

    // ============================================
    // FADE IN ON SCROLL ANIMATION
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll('.news-card, .service-item, .org-card, .link-box, .director-section, .vehicle-card');

    animatedElements.forEach(el => {
        el.classList.add('fade-in-element');
        observer.observe(el);
    });

    // ============================================
    // LAZY LOADING IMAGES
    // ============================================
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');

                if (src) {
                    img.setAttribute('src', src);
                    img.removeAttribute('data-src');
                    img.classList.add('loaded');
                }

                observer.unobserve(img);
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));

    // ============================================
    // HERO SLIDER (If multiple slides exist)
    // ============================================
    const heroSlides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;

    if (heroSlides.length > 1) {
        setInterval(() => {
            heroSlides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % heroSlides.length;
            heroSlides[currentSlide].classList.add('active');
        }, 5000);
    }

    // ============================================
    // ACCORDION FUNCTIONALITY
    // ============================================
    const accordionHeaders = document.querySelectorAll('.org-title');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const card = this.parentElement;
            const content = card.querySelector('.org-content');

            if (content) {
                card.classList.toggle('active');

                if (card.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = '0';
                }
            }
        });
    });

    // ============================================
    // SEARCH FUNCTIONALITY (If search exists)
    // ============================================
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function (e) {
            e.preventDefault();
            const query = searchInput.value.trim();

            if (query) {
                // Implement search logic here
                console.log('Searching for:', query);
                // You can redirect to a search page or show results
            }
        });

        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchButton.click();
            }
        });
    }

    // ============================================
    // ACCESSIBILITY ENHANCEMENTS
    // ============================================
    // Skip to main content
    const skipLink = document.querySelector('.skip-to-main');
    if (skipLink) {
        skipLink.addEventListener('click', function (e) {
            e.preventDefault();
            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
                mainContent.setAttribute('tabindex', '-1');
                mainContent.focus();
            }
        });
    }

    // Keyboard navigation for menu
    const menuItems = document.querySelectorAll('.main-menu a');
    menuItems.forEach((item, index) => {
        item.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                const submenu = this.parentElement.querySelector('.submenu');
                if (submenu) {
                    submenu.style.display = 'none';
                }
            }
        });
    });

    // ============================================
    // UTILITIES
    // ============================================

    // Debounce function for performance
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Window resize handler
    const handleResize = debounce(function () {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768 && mainMenu.classList.contains('active')) {
            mainMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }, 250);

    window.addEventListener('resize', handleResize);

    // ============================================
    // CONSOLE MESSAGE
    // ============================================
    console.log('%c Mali Customs Website ', 'background: #00008b; color: #fff; font-size: 16px; padding: 5px 10px;');
    console.log('%c Website initialized successfully! ', 'color: #79AF33; font-size: 14px;');

});

// ============================================
// ADD CSS FOR ANIMATIONS
// ============================================
const style = document.createElement('style');
style.textContent = `
    .fade-in-element {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in-visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .header.scrolled {
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    img[data-src] {
        opacity: 0.5;
        transition: opacity 0.3s ease;
    }
    
    img.loaded {
        opacity: 1;
    }
    
    @media (max-width: 768px) {
        .submenu {
            display: none;
        }
        
        .submenu-open .submenu {
            display: block;
        }
    }
`;
document.head.appendChild(style);
