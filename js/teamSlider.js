var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  autoHeight: true,
  spaceBetween: 30,
  breakpoints: {
    1350: {
      // spaceBetween: 30,
      slidesPerGroup: 3,
      slidesPerView: 3,
    },
    750: {
      slidesPerGroup: 2,
      slidesPerView: 2,
    },
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
    },
    0: {
      slidesPerGroup: 1,
      slidesPerView: 1,
    },
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
