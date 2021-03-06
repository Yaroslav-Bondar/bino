var body = document.querySelector("body");
var start = document.querySelector('.start');
var startHeight = start.clientHeight;
var startNavArea = document.querySelector('.start__nav-area');
var startNavAreaHeight = startNavArea.clientHeight; 
var startHam = document.querySelector('.start__ham');
var startNavBlock = document.querySelector('.start__nav-block');
var startButtonDownBlock = document.querySelector(".start__button-down-block");
var startButtons = document.querySelector('.start__buttons');
var headerMenu = document.querySelector('.header__menu');
var headerFixed = document.querySelector('.header-fixed');
var headerFixedHeight = headerFixed.clientHeight;
var heightFixedActive = startHeight - headerFixedHeight;           // высота появления header fixed
var headerFixedHam = document.querySelector('.header-fixed__ham');
var headerFixedMenu = document.querySelector('.header-fixed__menu');
var headerFixedMenuOverlay = document.querySelector('.header-fixed__menu-overlay');
var startButtonBackground = document.querySelector(".start__button-background");
var startButtonBackgroundHeight = startButtonBackground.clientHeight;
var iAmScroll = Math.round(window.pageYOffset);
var winWidth = window.innerWidth;                          // ширина окна
var widthFixededMenuOnOf = 850;                              // ширина окна вкл./выкл. кнопки бургера меню фиксированного header (меню) 
var widthMenuOnOf = 930;                              // ширина окна вкл./выкл. кнопки бургера меню header  
var startButtonDownBlockOffsetTop = startButtonDownBlock.offsetTop;
var startButtonsOffsetTop_clientHeight = startButtons.offsetTop + startButtons.clientHeight;
window.addEventListener("scroll", ()=> {                   // получаем высоту вертикального скролла страницы
    iAmScroll = Math.round(window.pageYOffset);            // в переменную iAmScroll при вертикальном скроллле
});
window.addEventListener("resize", ()=> {                   // получаем высоту вертикального скролла страницы
    iAmScroll = Math.round(window.pageYOffset);            // в переменную iAmScroll при изменении ширины/высоты окна
    startNavAreaHeight = startNavArea.clientHeight;
    startHeight = start.clientHeight;
    headerFixedHeight = headerFixed.clientHeight;
    heightFixedActive = startHeight - headerFixedHeight;
    winWidth = window.innerWidth;
    startButtonDownBlockOffsetTop = startButtonDownBlock.offsetTop;
    startButtonsOffsetTop_clientHeight = startButtons.offsetTop + startButtons.clientHeight;
});