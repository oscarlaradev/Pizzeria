// Custom Cursor Logic
const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Smooth follow for outline
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Hover effects for cursor
const hoverTargets = document.querySelectorAll('.hover-target, a, button');

hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
        cursorOutline.style.width = '60px';
        cursorOutline.style.height = '60px';
        cursorOutline.style.backgroundColor = 'rgba(255, 42, 122, 0.1)';
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
    
    target.addEventListener('mouseleave', () => {
        cursorOutline.style.width = '40px';
        cursorOutline.style.height = '40px';
        cursorOutline.style.backgroundColor = 'transparent';
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Animation
const tl = gsap.timeline();

tl.from('.hero-label', {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
})
.from('.hero-title', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
}, "-=0.8")
.from('.hero-desc', {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
}, "-=0.8")
.from('.hero-actions', {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
}, "-=0.8")
.from('.navbar', {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
}, "-=1");

// Menu Scroll Animation
gsap.from('.section-header h2', {
    scrollTrigger: {
        trigger: '.menu-section',
        start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
});

gsap.from('.header-line', {
    scrollTrigger: {
        trigger: '.menu-section',
        start: 'top 80%',
    },
    scaleX: 0,
    transformOrigin: "left center",
    duration: 1,
    ease: "power4.out",
    delay: 0.2
});

gsap.from('.menu-item', {
    scrollTrigger: {
        trigger: '.menu-grid',
        start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power4.out"
});

// Specialties Animation
gsap.from('.spec-item', {
    scrollTrigger: {
        trigger: '#especialidades',
        start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power4.out"
});

// Basic Pizzas Animation
gsap.from('.basic-item', {
    scrollTrigger: {
        trigger: '.basic-pizzas',
        start: 'top 80%',
    },
    x: -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.05,
    ease: "power2.out"
});

// Extras Animation
gsap.from('.extras-col, .aderezos-banner', {
    scrollTrigger: {
        trigger: '.extras-section',
        start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power4.out"
});
