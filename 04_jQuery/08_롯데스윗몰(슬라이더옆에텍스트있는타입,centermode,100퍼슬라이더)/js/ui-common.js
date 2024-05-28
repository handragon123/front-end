$(function () {
  let newSlider = new Swiper('.main_new_slider .swiper', {
    // 슬라이드 크기를 css로 잡아야할 경우
    slidesPerView: 'auto',
    spaceBetween: 30,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  let bestSlider = new Swiper('.main_best_slider .swiper', {
    // 슬라이드 크기를 css로 잡아야할 경우
    slidesPerView: 'auto',
    spaceBetween: 50,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  // centeredSlides 일 경우 왼쪽이 비어서 강제로 이동
  bestSlider.slideTo(3, 0);
});
