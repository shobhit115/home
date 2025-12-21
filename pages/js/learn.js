
const toggleBtn = document.getElementById("theme-toggle");
const logo = document.getElementById("theme-logo");
const root = document.documentElement;

// Paths to SVGs
const DARK_LOGO = "..//assets//openlearnyWhiteLogo.svg";
const LIGHT_LOGO = "..//assets//openlearnyDarkLogo.svg";

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    root.setAttribute("data-theme", "light");
    logo.src = LIGHT_LOGO;
    toggleBtn.textContent = "🌙";
} else {
    logo.src = DARK_LOGO;
    toggleBtn.textContent = "☀";
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
    const isLight = root.getAttribute("data-theme") === "light";

    if (isLight) {
        root.removeAttribute("data-theme");
        logo.src = DARK_LOGO;
        toggleBtn.textContent = "☀";
        localStorage.setItem("theme", "dark");
    } else {
        root.setAttribute("data-theme", "light");
        logo.src = LIGHT_LOGO;
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
