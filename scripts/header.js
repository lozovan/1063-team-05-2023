const burgerButton = document.querySelector(".header__burger-menu");
const headerTop = document.querySelector(".header__top");
const body = document.querySelector("body");
const navLinks = document.querySelectorAll(".header__menu-link");

burgerButton.addEventListener("click", function() {
    headerTop.classList.toggle("active");
    burgerButton.classList.toggle("active");
    body.classList.toggle("lock");
});

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
        if (burgerButton.classList.contains("active")) {
            headerTop.classList.remove("active");
            burgerButton.classList.remove("active");
            body.classList.remove("lock");
        }
    });
});