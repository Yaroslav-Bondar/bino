let portfolioImgWrapper = document.querySelectorAll(".portfolio__img-wrapper");
let portfolioButton = document.querySelectorAll(".portfolio__button");
let portfolioImgTitle = document.querySelectorAll(".portfolio__img-title");
let portfolioImgTitleItem = document.querySelectorAll(".portfolio__img-title-item");
let portfolioImgTitleBtn = document.querySelectorAll(".portfolio__img-title-btn");
let portfolioImgRow = document.querySelectorAll(".portfolio__img-row");
let portfolioAmountClickImgTitleBtn = 0;

portfolioImgWrapper[0].classList.add("portfolio__img-wrapper_active");
portfolioButton[1].classList.add("portfolio__button_active");

portfolioButton.forEach( (item, index) => {
    item.addEventListener("click", () => {
        document.querySelectorAll(".portfolio__img-wrapper.portfolio__img-wrapper_active").forEach ( (item, index) => { // remove show images
            item.classList.remove("portfolio__img-wrapper_active");
            portfolioImgTitle[index].classList.remove("portfolio__img-title_active");
            portfolioImgRow[index].classList.remove("portfolio__img-row_no-active");
            portfolioImgTitleBtn[index].classList.remove("portfolio__img-title-btn_noactive");
        });
        if (index == 0) {
            portfolioImgWrapper.forEach( (value, index) => {
                value.classList.add("portfolio__img-wrapper_active");
                portfolioImgTitle[index].classList.add("portfolio__img-title_active");
                portfolioImgTitleItem[index].innerHTML = portfolioButton[index+1].innerHTML;
            });
        } else {
            portfolioImgWrapper[index-1].classList.add("portfolio__img-wrapper_active");
        }
        document.querySelector(".portfolio__button.portfolio__button_active").classList.remove("portfolio__button_active"); //show buttons
        item.classList.add("portfolio__button_active")
    });
});

portfolioImgTitleBtn.forEach ((item, index) => {     // display images row when pressed button "All" in menu
    item.addEventListener("click", () => {
        item.classList.toggle("portfolio__img-title-btn_noactive");
        portfolioImgRow[index].classList.toggle("portfolio__img-row_no-active");
    });
});
