let caseImgBlock = document.querySelectorAll(".case__img-block");
let caseDotsItem = document.querySelectorAll(".case__dots-item");
let caseTextBlock = document.querySelectorAll(".case__text-block");
const nextCaseDelay = 3500;
let currentCaseCounter = 0; 

caseTextBlock[0].classList.add("case__text-block_active");
caseImgBlock[0].classList.add("case__img-block_active");
caseDotsItem[0].classList.add("case__dots-item_active"); 

// setInterval(nextCaseImage, nextCaseDelay); // off/on autoplay

function nextCaseImage() {
	caseImgBlock[currentCaseCounter].classList.remove("case__img-block_active");
	caseTextBlock[currentCaseCounter].classList.remove("case__text-block_active");
	caseDotsItem[currentCaseCounter].classList.remove("case__dots-item_active");
   
	currentCaseCounter = (currentCaseCounter+1) % caseImgBlock.length;
  
	caseImgBlock[currentCaseCounter].classList.add("case__img-block_active");
	caseTextBlock[currentCaseCounter].classList.add("case__text-block_active");
	caseDotsItem[currentCaseCounter].classList.add("case__dots-item_active");
}

caseDotsItem.forEach((indicator, i) => {   // when click on case__dots-item 
	indicator.addEventListener('click', () => {
	  document.querySelector('.case__dots-item.dots__item.case__dots-item_active').classList.remove('case__dots-item_active');
	  document.querySelector('.case__text-block.case__text-block_active').classList.remove('case__text-block_active');
	  document.querySelector('.case__img-block.case__img-block_active').classList.remove('case__img-block_active');
	  indicator.classList.add('case__dots-item_active');
	  caseImgBlock[i].classList.add("case__img-block_active"); 
	  caseTextBlock[i].classList.add("case__text-block_active"); 
	  currentCaseCounter = i;
	});
  });
