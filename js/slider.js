let swiperFaq = new Swiper(".exterior-odd__swiper", {
  slidesPerView: 'auto',
  spaceBetween: 30,
  grabCursor: false,
  loop: true,
  pagination: {
  el: '.swiper-pagination',
  clickable: true,
  MultipleActiveThumbs: true,
  autoScrollOffset: 10,
  thumbsContainerClass: 'swiper-thumbs',
  slideThumbActiveClass: 'swiper-slide-thumb-active',
  
  },
  navigation: {
  nextEl: ".my-medium-swiper-next",
  prevEl: ".my-medium-swiper-prev",
  },
  });