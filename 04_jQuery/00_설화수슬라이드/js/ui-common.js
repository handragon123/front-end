$(function () {
  function changeSwiperOpt() {
    // 요소가 없으면 return으로 함수를 빠져나가게
    if (!$('.main_use').length) return;

    // swiper인스턴스객체가 들어갈 변수이므로 null로 초기화
    let mainUse = null;
    let toggleSwiper = true;

    // 창크기 767이하(모바일)에서 swiper옵션 변경
    $(window)
      .on('resize', function () {
        let w = $(this).outerWidth();

        if (w >= 768) {
          // destroy메서드를 swiper인스턴스가 있을 경우만 실행
          // destroy(deleteInstance, cleanStyles): swiper인스턴스제거, 스타일제거
          if (mainUse) mainUse.destroy(true, true);

          mainUse = new Swiper('.main_use .swiper', {
            slidesPerView: 3,
            spaceBetween: 24,
            pagination: {
              el: '.swiper-pagination',
            },
          });
        } else {
          if (mainUse) mainUse.destroy(true, true);

          mainUse = new Swiper('.main_use .swiper', {
            loop: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            autoplay: {
              delay: 2000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              type: 'progressbar',
            },
          });

          // 복제된 슬라이드를 제외한 슬라이드 총갯수 구하기
          let total = $(
            '.main_use .swiper-slide:not(.swiper-slide-duplicate)'
          ).length;
          $('.main_use .total_num').text(total);

          // swiper이벤트, loop슬라이더면 realIndex로 순서값 가져오기
          mainUse.on('slideChange', function () {
            $('.main_use .active_num').text(mainUse.realIndex + 1);
          });
        }

        // 리사이즈시 pc에서 모바일로 돌아왔을 경우 토글버튼과 동일하게 자동재생 맞춤
        if (!toggleSwiper) {
          mainUse.autoplay.stop();
        }
      })
      .trigger('resize');

    $('.main_use .toggle_btn').on('click', function () {
      $(this).toggleClass('on');

      if (toggleSwiper) {
        mainUse.autoplay.stop();
        toggleSwiper = false;
      } else {
        mainUse.autoplay.start();
        toggleSwiper = true;
      }
    });
  }

  changeSwiperOpt();

  let proSlider = new Swiper('.with_slider .swiper', {
    loop: true,
    slidesPerGroup: 4,
    breakpoints: {
      1201: {
        slidesPerView: 4,
        spaceBetween: 9,
      },
      970: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      611: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
