var startScreen = document.getElementsByClassName("start-screen__slides");
// var arrow = document.getElementsByClassName("arrow__item");
const prev = document.querySelector(".start__slider-arrow-prev");
const next = document.querySelector(".start__slider-arrow-next");
var startHeader = document.querySelectorAll(".start__header");
var index=0;
var previous=index;

prev.addEventListener("click",()=> {
    prevSlide();
});
next.addEventListener("click",()=> {
    nextSlide();
});

function prevSlide() {
    if(index==0){
        index=startScreen.length-1;
        previous=0;
    }
    else {
        previous=index;
        index--;
    }
    changeSlidePrev();
}

function nextSlide(){
    if(index==startScreen.length-1) {
        index=0;
        previous=startScreen.length-1;
    }
    else {
        previous=index;
        index++;
    }
    changeSlide();
}

function changeSlide() {
    for(let i=0; i<startScreen.length; i++){
        startScreen[i].classList.remove("start_default");
        startScreen[i].classList.remove("start__slider-active");
        startScreen[i].classList.remove("start__slider-noactive");
        startScreen[i].classList.remove("start__slider-active-prev");
        startScreen[i].classList.remove("start__slider-noactive-prev");
    }
    startHeader[previous].classList.remove("start__header_default");
    startHeader[index].classList.add("start__header_active");
    startHeader[previous].classList.remove("start__header_active");
    startScreen[previous].classList.add("start__slider-noactive");
    startScreen[index].classList.add("start__slider-active");
    startButtons = document.querySelector('.start__header_active .wrapper .start__buttons'); // чтобы получить элемент при смене слайдов 
}
function changeSlidePrev() {
    for(let i=0; i<startScreen.length; i++){
        startScreen[i].classList.remove("start_default");
        startScreen[i].classList.remove("start__slider-active");
        startScreen[i].classList.remove("start__slider-noactive");
        startScreen[i].classList.remove("start__slider-active-prev");
        startScreen[i].classList.remove("start__slider-noactive-prev");
    }
    startHeader[previous].classList.remove("start__header_default");
    startHeader[index].classList.add("start__header_active");
    startHeader[previous].classList.remove("start__header_active");
    startScreen[previous].classList.add("start__slider-noactive-prev");
    startScreen[index].classList.add("start__slider-active-prev");
    startButtons = document.querySelector('.start__header_active .wrapper .start__buttons'); // чтобы получить элемент при смене слайдов 
}
