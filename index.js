document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (window.scrollY > 50) { 
            header.classList.add("scrolled"); 
        } else {
            header.classList.remove("scrolled");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger-menu");
    const nav = document.querySelector(".nav");

    burger.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});