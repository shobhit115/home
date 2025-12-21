
const toggleBtn = document.getElementById("theme-toggle");
const logo = document.getElementById("theme-logo");
const root = document.documentElement;



const LIGHT_LOGO_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="347" zoomAndPan="magnify" viewBox="0 0 260.25 284.999983" height="380" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="442fd409c5"><path d="M 0 24.089844 L 130 24.089844 L 130 284.339844 L 0 284.339844 Z M 0 24.089844 " clip-rule="nonzero"/></clipPath><clipPath id="cc0d9ecb39"><path d="M 129.707031 0.410156 L 259.082031 0.410156 L 259.082031 259.164062 L 129.707031 259.164062 Z M 129.707031 0.410156 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#442fd409c5)"><path fill="#000000" d="M 129.9375 210.554688 L 129.9375 284.335938 C 58.191406 284.335938 0 226.144531 0 154.394531 C 0 82.648438 58.191406 24.457031 129.9375 24.457031 L 129.9375 98.1875 C 99.070312 98.34375 74.09375 123.476562 74.09375 154.394531 C 74.09375 185.316406 99.070312 210.398438 129.9375 210.554688 Z M 129.9375 210.554688 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#cc0d9ecb39)"><path fill="#000000" d="M 129.542969 73.964844 L 129.542969 0.410156 C 201.070312 0.410156 259.082031 58.425781 259.082031 129.953125 C 259.082031 201.480469 201.070312 259.492188 129.542969 259.492188 L 129.542969 185.988281 C 160.316406 185.832031 185.214844 160.777344 185.214844 129.953125 C 185.214844 99.125 160.316406 74.121094 129.542969 73.964844 Z M 129.542969 73.964844 " fill-opacity="1" fill-rule="nonzero"/></g></svg>
`;

const DARK_LOGO_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="347" zoomAndPan="magnify" viewBox="0 0 260.25 284.999983" height="380" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="82eb0d47ca"><path d="M 0 24.089844 L 130 24.089844 L 130 284.339844 L 0 284.339844 Z M 0 24.089844 " clip-rule="nonzero"/></clipPath><clipPath id="ff53e9873d"><path d="M 129.707031 0.410156 L 259.082031 0.410156 L 259.082031 259.164062 L 129.707031 259.164062 Z M 129.707031 0.410156 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#82eb0d47ca)"><path fill="#ffffff" d="M 129.9375 210.554688 L 129.9375 284.335938 C 58.191406 284.335938 0 226.144531 0 154.394531 C 0 82.648438 58.191406 24.457031 129.9375 24.457031 L 129.9375 98.1875 C 99.070312 98.34375 74.09375 123.476562 74.09375 154.394531 C 74.09375 185.316406 99.070312 210.398438 129.9375 210.554688 Z M 129.9375 210.554688 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#ff53e9873d)"><path fill="#ffffff" d="M 129.542969 73.964844 L 129.542969 0.410156 C 201.070312 0.410156 259.082031 58.425781 259.082031 129.953125 C 259.082031 201.480469 201.070312 259.492188 129.542969 259.492188 L 129.542969 185.988281 C 160.316406 185.832031 185.214844 160.777344 185.214844 129.953125 C 185.214844 99.125 160.316406 74.121094 129.542969 73.964844 Z M 129.542969 73.964844 " fill-opacity="1" fill-rule="nonzero"/></g></svg>
`;


// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    root.setAttribute("data-theme", "light");
    logo.innerHTML = LIGHT_LOGO_SVG;
    toggleBtn.textContent = "🌙";
} else {
    root.removeAttribute("data-theme");
    logo.innerHTML = DARK_LOGO_SVG;
    toggleBtn.textContent = "☀";
}


// Toggle theme
toggleBtn.addEventListener("click", () => {
    const isLight = root.getAttribute("data-theme") === "light";

    if (isLight) {
        root.removeAttribute("data-theme");
        logo.innerHTML = DARK_LOGO_SVG;
        toggleBtn.textContent = "☀";
        localStorage.setItem("theme", "dark");
    } else {
        root.setAttribute("data-theme", "light");
        logo.innerHTML = LIGHT_LOGO_SVG;
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});


// Mobile Menu Logic
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

menuToggle.addEventListener('click', () => {
    // Toggle menu visibility
    navLinks.classList.toggle('active');
    // Animate hamburger icon
    menuToggle.classList.toggle('open');
    // Prevent body scroll when menu is open
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
});

// Close menu when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });
});

// Close menu on resize to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
});
/* --- DOCS SIDEBAR LOGIC --- */
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebarClose = document.getElementById('sidebar-close');
const docSidebar = document.getElementById('doc-sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
// Select all links inside sidebar to close menu when clicked
const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

function openSidebar() {
    docSidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeSidebar() {
    docSidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event Listeners (Check if elements exist to avoid errors on other pages)
if (sidebarToggle) {
    sidebarToggle.addEventListener('click', openSidebar);
}

if (sidebarClose) {
    sidebarClose.addEventListener('click', closeSidebar);
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
}

// Close sidebar when a link is clicked (Mobile UX)
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
            closeSidebar();
        }
        
        // Optional: Update 'active' class manually (if not using a library)
        sidebarLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});