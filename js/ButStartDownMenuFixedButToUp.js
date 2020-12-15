let startButtonDownBlock = document.querySelector(".start__button-down-block");
let startButtonBackground = document.querySelector(".start__button-background");
let startButtonDownBlockOffsetTop = startButtonDownBlock.offsetTop;
let buttonUpWrapper = document.querySelector('.button-up__wrapper');
var headerFix = document.querySelector('.header-fix');
let scroll = document.documentElement.scrollTop; // for other browsers
let scrollForSafari = document.body.scrollTop; // for Safari browser

window.addEventListener("resize",() => {
    startButtonDownBlockOffsetTop = startButtonDownBlock.offsetTop;   // get height when window resize
});
startButtonBackground.addEventListener("click", scrollToFixed);
function scrollToFixed() {
    document.body.scrollTop = startButtonDownBlock.offsetTop; // for Safari
    document.documentElement.scrollTop = startButtonDownBlock.offsetTop; // for other
};

if (Math.round(scroll) >= startButtonDownBlockOffsetTop || Math.round(scrollForSafari) >= startButtonDownBlockOffsetTop) {
    buttonUpWrapper.classList.add('button-up_show');
    headerFix.classList.add('header_fixed');
}
else { 
    buttonUpWrapper.classList.remove('button-up_show');
    headerFix.classList.remove('header_fixed'); 
}

window.addEventListener('scroll', trackScroll);
buttonUpWrapper.addEventListener('click', backToTop);

function trackScroll() {
    scroll = document.documentElement.scrollTop;
    scrollForSafari = document.body.scrollTop; // for Safari browser
    if (Math.round(scroll) >= startButtonDownBlockOffsetTop || Math.round(scrollForSafari) >= startButtonDownBlockOffsetTop) {
        buttonUpWrapper.classList.add('button-up_show');
        headerFix.classList.add('header_fixed');
    }
    else { 
        buttonUpWrapper.classList.remove('button-up_show');
        headerFix.classList.remove('header_fixed'); 
    }
}

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        // setTimeout(backToTop, -4);
    }
}