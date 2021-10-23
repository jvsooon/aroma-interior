const menuBtn = document.querySelector(".menu-btn"),
    menuBtnClose = document.querySelector(".menu-btn-close"),
    navMenu = document.querySelector(".navbar__nav-container"),
    links = document.querySelectorAll("nav a");

menuBtn.addEventListener("click", () => {
    navMenu.classList.add("nav--active");
});

menuBtnClose.addEventListener("click", () => {
    navMenu.classList.remove("nav--active");
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("nav--active");
    });
});
