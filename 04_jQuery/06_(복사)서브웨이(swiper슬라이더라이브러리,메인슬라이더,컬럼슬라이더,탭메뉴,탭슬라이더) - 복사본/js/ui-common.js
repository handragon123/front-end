$(function () {
  // gnb>li로 할 경우 불필요하게 여러번 실행되므로 .gnb로 처리
  $('#header .gnb')
    .on('mouseenter', function () {
      $('#header').addClass('on');
    })
    .on('mouseleave', function () {
      $('#header').removeClass('on');
    });

  // 메인슬라이더
  let mainSlider = new Swiper('.main_slider .swiper', {
    // loop 반복, 3번이 클론되어 1번앞으로와 3개 슬라이더여도 4개로뜸
    loop: true,
    // 슬라이드 애니매이션 시간
    speed: 500,
    // 마우스드래그, 모바일 touchMove(swipe) 이벤트 끄기
    allowTouchMove: false,
    // 페이드 효과
    // effect: 'flip',
    // 자동재생 -사용시 loop효과 사용해아함
    autoplay: {
      delay: 2000,
      // 슬라이드 왼쪽 인터렉션 발생해도 안멈추게
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  let toggleSlide = true;
  $('.main_slider .toggle_btn').on('click', function () {
    $(this).toggleClass('on');

    if (toggleSlide) {
      mainSlider.autoplay.stop();
      toggleSlide = false;
    } else {
      mainSlider.autoplay.play();
      toggleSlide = true;
    }
  });

  let menuSlider = new Swiper('.main_menu .swiper', {
    // 컬럼갯수
    slidesPerView: 4,
    // 넘어가는 컬럼 그룹수
    // slidesPerGroup: 2,
    // 컬럼 간격
    // spaceBetween: 40,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  $('.main_menu .menu_tab li').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');

    let idx = $(this).index();

    $('.main_menu .swiper_wrap')
      .eq(idx)
      .addClass('active')
      .siblings()
      .removeClass('active');
  });
});
