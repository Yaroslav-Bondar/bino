var servicesDots = document.querySelectorAll(".services__dots-item");
var services_slide = document.querySelectorAll(".services__slider-column");
var services_title = document.querySelectorAll(".services__title");
var services_subTitle = document.querySelectorAll(".services__text-column");
var services_textBlock = document.querySelectorAll(".services__text-block");
// default active
services_textBlock[0].classList.add("services_active");
servicesDots[0].classList.add("services_active");
services_slide[0].classList.add("services_active-default");

servicesDots.forEach((item, index) => {
    item.addEventListener("click", ()=> {
        // services buttons
        document.querySelector(".services__dots-item.dots__item.services_active").classList.remove("services_active");
        item.classList.add("services_active"); 
        // services_textBlock
        document.querySelector(".services__text-block.services_active").classList.remove("services_active");
        services_textBlock[index].classList.add("services_active");
        // services_title
        services_title.forEach((item) => {
            item.classList.remove("services_active");
        });
        services_title[index].classList.add("services_active");
        // services_subTitle
        services_subTitle.forEach((item) => {
            item.classList.remove("services_active");
            item.classList.remove("services_active1");
            item.classList.remove("services_active2");
        });
        let tmpSubtitle = services_textBlock[index].querySelectorAll(".services__text-column");
        for (let i = 0; i < tmpSubtitle.length; i++) {
            if (i == 0) {
                tmpSubtitle[i].classList.add("services_active");            
            }
            if (i == 1) {
                tmpSubtitle[i].classList.add("services_active1");            
            }
            if (i == 2) {
                tmpSubtitle[i].classList.add("services_active2");            
            } 
        }
        // services_slide
        services_slide.forEach((item) => {
            item.classList.remove("services_active");
            item.classList.remove("services_active-default");
        });
        services_slide[index].classList.add("services_active");
    });
});
