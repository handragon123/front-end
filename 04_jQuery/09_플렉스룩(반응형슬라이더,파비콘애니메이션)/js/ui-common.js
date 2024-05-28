$(function () {
  //   파비콘 애니메이션
  // - 0.1초 마다 #favicon의 href속성(attr) 값을 변경해야함
  // (setInterval, attr()메서드)
  // - 값에서 파일명의 숫자를 1 ~ 7까지 순회하여 바꿔야함
  const faviconElement = $('#favicon');
  var faviconIdx = 1;

  const Interval = setInterval(function () {
    faviconIdx = faviconIdx === 7 ? 1 : faviconIdx + 1;
    // faviconIdx = (faviconIdx % 7) + 1;
    // faviconIdx++;
    faviconElement.attr(
      'href',
      `images/favicon/favicon_logo_0${faviconIdx}.ico`
    );
  }, 100);

  const liveSlider = new Swiper('.swiper', {
    breakpoints: {
      // 1201 이상 pc
      1201: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      // 768 이상 pc
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // 320 이상 pc
      0: {
        // auto로하면 우리가 크기 조정 가능
        slidesPerView: 'auto',
        spaceBetween: 15,
      },
      // when window width is >= 640px
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
});
