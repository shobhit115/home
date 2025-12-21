
const toggleBtn = document.getElementById("theme-toggle");
const logo = document.getElementById("theme-logo");
const root = document.documentElement;

// Paths to SVGs
const DARK_LOGO = "assets/openlearnyWhiteLogo.svg";
const LIGHT_LOGO = "assets/openlearnyDarkLogo.svg";

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

