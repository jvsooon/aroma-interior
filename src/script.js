const menuBtn = document.querySelector(".menu-btn"),
    menuBtnClose = document.querySelector(".menu-btn-close"),
    navMenu = document.querySelector(".navbar__nav-container");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("nav--active");
});

menuBtnClose.addEventListener("click", () => {
    navMenu.classList.toggle("nav--active");
});
