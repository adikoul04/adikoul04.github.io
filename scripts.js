document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const createMobileButton = () => {
        const button = document.createElement('button');
        button.classList.add('mobile-menu-button');
        button.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f6d29b">
                <line x1="3" y1="12" x2="21" y2="12" stroke-width="2"/>
                <line x1="3" y1="6" x2="21" y2="6" stroke-width="2"/>
                <line x1="3" y1="18" x2="21" y2="18" stroke-width="2"/>
            </svg>
        `;
        return button;
    };

    const mobileButton = createMobileButton();
    const menu = document.querySelector('.menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    document.querySelector('.menu-background').appendChild(mobileButton);

    const toggleMenu = () => {
        menu.classList.toggle('active');
        mobileButton.classList.toggle('active');
        menuOverlay.classList.toggle('active');
    };

    mobileButton.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    menuOverlay.addEventListener('click', () => {
        toggleMenu();
    });

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.menu a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = '#f6d29b';
        }
    });
});

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.content-1, .content-2, .content-3, .content-4').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});

const mobileMenuButton = document.createElement('button');
mobileMenuButton.classList.add('mobile-menu-button');
mobileMenuButton.innerHTML = `
    <span class="hamburger"></span>
`;

const mobileMenu = document.querySelector('.menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuButton.classList.toggle('active');
});