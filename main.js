document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("mobile-menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (!menuToggle || !navLinks) {
        console.error("Mobile navigation elements not found!");
        return;
    }

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
});