let buttonUpWrapper = document.querySelector('.button-up__wrapper');
let headerFixedNavBlock = document.querySelector('.header-fixed__nav-block');
headerMenu.style.setProperty('--var-heightHeaderMenu', window.innerHeight -  startNavAreaHeight + 'px');                      // высота burger меню
headerMenu.style.setProperty('--var-topHeaderMenu', window.innerHeight - (window.innerHeight - startNavAreaHeight) + 'px'); 
headerFixedMenu.style.setProperty('--var-heightFixedMenu', window.innerHeight - headerFixedHeight + 'px');  // расчет высоты fixed меню
headerFixedMenu.style.setProperty('--var-topFixedMenu', window.innerHeight - (window.innerHeight - headerFixedHeight) + 'px');  // расчет позиции top fixed меню
headerFixedMenuOverlay.style.setProperty('--var-headerFixedOverlayHeight', window.innerHeight - headerFixedHeight + 'px');  // высотa fixed overlay
headerFixedMenuOverlay.style.setProperty('--var-headerFixedOverlayTop', window.innerHeight - (window.innerHeight - headerFixedHeight) + 'px');  // позиция top fixed-overlay
// logic start__button-down-block s
if(startButtonDownBlockOffsetTop > startButtonsOffsetTop_clientHeight) {
    startButtonDownBlock.classList.add('start__button-down-block_active');    
}
else {
    startButtonDownBlock.classList.remove('start__button-down-block_active');    
}
// logic start__button-down-block s  
if (iAmScroll >= heightFixedActive) {                         // вкл./выкл. header-fixed & button-up при скролле страницы
    buttonUpWrapper.classList.add('button-up_show');
    headerFixed.classList.add('header-fixed_active');
}
else { 
    buttonUpWrapper.classList.remove('button-up_show');
    headerFixed.classList.remove('header-fixed_active'); 
}
if (widthFixededMenuOnOf >= winWidth) {               // вкл./выкл. бургера header-fixed
    headerFixedHam.classList.add('burger__active');
    headerFixedNavBlock.classList.add('header-fixed__nav-block_not-active');
}
else {
    headerFixedHam.classList.remove('burger__active');
    headerFixedNavBlock.classList.remove('header-fixed__nav-block_not-active');
}
if (widthMenuOnOf >= winWidth) {               // вкл./выкл. бургера header 
    startHam.classList.add('burger__active');
    startNavBlock.classList.add('start__nav-block_not-active');
}
else {
    startHam.classList.remove('burger__active');
    startNavBlock.classList.remove('start__nav-block_not-active');
}
window.addEventListener("resize", () => {
    headerMenu.style.setProperty('--var-heightHeaderMenu', window.innerHeight -  startNavAreaHeight + 'px');  // высота burger меню
    headerMenu.style.setProperty('--var-topHeaderMenu', window.innerHeight - (window.innerHeight - startNavAreaHeight) + 'px'); 
    headerFixedMenu.style.setProperty('--var-heightFixedMenu', window.innerHeight - headerFixedHeight + 'px');  // расчет высоты fixeded меню
    headerFixedMenu.style.setProperty('--var-topFixedMenu', window.innerHeight - (window.innerHeight - headerFixedHeight) + 'px');  // расчет позиции top fixeded меню
    headerFixedMenuOverlay.style.setProperty('--var-headerFixedOverlayHeight', window.innerHeight - headerFixedHeight + 'px');  // высотa fixeded overlay
    headerFixedMenuOverlay.style.setProperty('--var-headerFixedOverlayTop', window.innerHeight - (window.innerHeight - headerFixedHeight) + 'px');  // позиция top fixeded overlay
    if (widthFixededMenuOnOf >= winWidth) {               // вкл./выкл. бургера header-fixed
        headerFixedHam.classList.add('burger__active');
        headerFixedNavBlock.classList.add('header-fixed__nav-block_not-active');
        if (headerFixedHam.classList.contains('active') && iAmScroll >= heightFixedActive) {
            headerFixedMenu.classList.add('header-fixed__menu_active');
            headerFixedMenuOverlay.classList.add('header-fixed__menu-overlay_active');
            body.classList.add("lock");
        }
    }
    else {
        headerFixedHam.classList.remove('burger__active');
        headerFixedNavBlock.classList.remove('header-fixed__nav-block_not-active');
        headerFixedMenu.classList.remove('header-fixed__menu_active');
        headerFixedMenuOverlay.classList.remove('header-fixed__menu-overlay_active');
        if (headerFixedHam.classList.contains('active') && iAmScroll >= heightFixedActive) {
            body.classList.remove("lock");
        }
    }
    if (widthMenuOnOf >= winWidth) {               // вкл./выкл. бургера header 
        startHam.classList.add('burger__active');
        startNavBlock.classList.add('start__nav-block_not-active');
        if (startHam.classList.contains('active') && iAmScroll == 0) {                // header__menu (burger menu)
            headerMenu.classList.add('header__menu_active');
            body.classList.add("lock");
        }
    }
    else {
        startHam.classList.remove('burger__active');
        startNavBlock.classList.remove('start__nav-block_not-active');
        headerMenu.classList.remove('header__menu_active');
        body.classList.remove("lock");
    }
    // logic start__button-down-block s
    if(startButtonDownBlockOffsetTop > startButtonsOffsetTop_clientHeight) {
        startButtonDownBlock.classList.add('start__button-down-block_active');    
    }
    else {
        startButtonDownBlock.classList.remove('start__button-down-block_active');    
    }
    // logic start__button-down-block f
    if (iAmScroll >= heightFixedActive) {
        buttonUpWrapper.classList.add('button-up_show');
        headerFixed.classList.add('header-fixed_active');
    }
    else { 
        buttonUpWrapper.classList.remove('button-up_show');
        headerFixed.classList.remove('header-fixed_active'); 
    }
});
startButtonBackground.addEventListener("click", scrollToFixeded);
function scrollToFixeded() {
    document.body.scrollTop = heightFixedActive;             // for Safari
    document.documentElement.scrollTop = heightFixedActive;  // for other
};
window.addEventListener('scroll', trackScroll);
function trackScroll() {
    if (iAmScroll >= heightFixedActive) {
        buttonUpWrapper.classList.add('button-up_show');
        headerFixed.classList.add('header-fixed_active');
        if (headerFixedHam.classList.contains('active') && headerFixedHam.classList.contains('burger__active')) {
            headerFixedMenu.classList.add('header-fixed__menu_active');
            headerFixedMenuOverlay.classList.add('header-fixed__menu-overlay_active');
        }
    }
    else { 
        buttonUpWrapper.classList.remove('button-up_show');
        headerFixed.classList.remove('header-fixed_active');
        headerFixedMenu.classList.remove('header-fixed__menu_active');
        headerFixedMenuOverlay.classList.remove('header-fixed__menu-overlay_active'); 
    }
    if (iAmScroll == 0 && startHam.classList.contains('active')) { // поведение header бургер меню
        headerMenu.classList.add('header__menu_active');
        body.classList.add("lock");
    }
}
buttonUpWrapper.addEventListener('click', backToTop);
function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        // setTimeout(backToTop, -4);
    }
}