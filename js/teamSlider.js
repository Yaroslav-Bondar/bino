var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  autoHeight: true,
  breakpoints: {
    1350: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    750: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
