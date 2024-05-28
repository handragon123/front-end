$(function () {
  let mainSlider = new Swiper('.main_slider .swiper', {
    loop: true,
    effect: 'fade',
    speed: 1500,
    autoplay: {
      delay: 3000,
      //일시정지버튼있을때 멈추지않음
      disableOnInteraction: false,
    },
    pagination: {
      type: 'fraction',
      el: '.swiper-pagination',
      formatFractionCurrent: function (number) {
        // number가 10 미만일 때만 '0' 붙이기
        return number < 10 ? '0' + number : number;
      },
      formatFractionTotal: function (number) {
        return number < 10 ? '0' + number : number;
      },
      renderFraction: function (currentClass, totalClass) {
        return (
          // prettier-ignore
          '<span class="' + currentClass + '"></span>' +
          '<span class="' + totalClass + '"></span>'
        );
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  let txtToggle = true;
  $('.main_slider .toggle_btn').on('click', function () {
    if (txtToggle) {
      $(this).find('span').text('play');
      $(this).find('i').attr('class', 'ri-play-fill');
      mainSlider.autoplay.stop();
      txtToggle = false;
    } else {
      $(this).find('span').text('stop');
      $(this).find('i').attr('class', 'ri-pause-fill');
      mainSlider.autoplay.start();
      txtToggle = true;
    }

    // html 속성(attribute) 가져오거나 변경
    console.log($(this).attr('class'));
    // $(this).attr('class', 'test');
  });
});
