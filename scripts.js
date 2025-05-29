document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Mobile Menu Toggle
    const menu = document.querySelector('.menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuBackground = document.querySelector('.menu-background');
    const menuBlur     = document.querySelector('.menu-blur');   //  NEW

    const mobileButton = document.createElement('button');
    mobileButton.classList.add('mobile-menu-button');
    mobileButton.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="3" y1="12" x2="21" y2="12" stroke-width="2"/>
            <line x1="3" y1="6" x2="21" y2="6" stroke-width="2"/>
            <line x1="3" y1="18" x2="21" y2="18" stroke-width="2"/>
        </svg>
    `;
    menuBackground.appendChild(mobileButton);

    const toggleMenu = () => {
        menu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        mobileButton.classList.toggle('active');
        menuBlur.classList.toggle('active');
    };

    mobileButton.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    menuOverlay.addEventListener('click', toggleMenu);

    // Highlight current menu item
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.menu a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = '#f6d29b';
        }
    });

    // Typewriter Effect
    const phrases = ["Full‑Stack Developer", "AI Enthusiast", "Robotics Engineer"];
    const target = document.getElementById('typed-output');
    if (target) {
        let phraseIndex = 0, charIndex = 0, deleting = false;

        const step = () => {
            const current = phrases[phraseIndex];
            if (!deleting) {
                target.textContent = current.slice(0, ++charIndex);
                if (charIndex === current.length) {
                    deleting = true;
                    setTimeout(step, 1500);
                    return;
                }
            } else {
                target.textContent = current.slice(0, --charIndex);
                if (charIndex === 0) {
                    deleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                }
            }
            setTimeout(step, deleting ? 50 : 80);
        };
        step();
    }

    // Fade-in on Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${Math.random() * 0.2}s`;
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, .main-content, .container, .content-1, .content-2, .content-3, .content-4').forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });
});
