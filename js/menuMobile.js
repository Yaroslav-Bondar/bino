var ham = document.querySelector(".start__ham");
var navMenu = document.querySelector(".start__nav-box");
var body = document.getElementsByTagName("body");

ham.addEventListener("click", () => {
    ham.classList.toggle("active");
    body[0].classList.toggle("lock");
    navMenu.classList.toggle("active");
});