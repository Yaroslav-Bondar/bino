var startHam = document.querySelector(".start__ham");
var navMenu = document.querySelector(".start__nav-box");
var headerFixedHam = document.querySelector('.header-fixed__ham');
startHam.addEventListener("click", () => {
    startHam.classList.toggle("active");
    body.classList.toggle("lock");
    navMenu.classList.toggle("active");
    headerMenu.classList.toggle("header__menu_active");
});
headerFixedHam.addEventListener('click', () => {
    headerFixedHam.classList.toggle("active");
    headerFixedMenu.classList.toggle('header-fixed__menu_active');
    headerFixedMenuOverlay.classList.toggle('header-fixed__menu-overlay_active');
    body.classList.toggle("lock");
});
// When the user clicks anywhere outside of the headerFixedMenuOverlay, close it
window.onclick = function(event) {
    if (event.target == headerFixedMenuOverlay) {
        headerFixedHam.classList.remove("active");
        headerFixedMenu.classList.remove('header-fixed__menu_active');
        headerFixedMenuOverlay.classList.remove('header-fixed__menu-overlay_active');
        body.classList.remove("lock");
    }
}
