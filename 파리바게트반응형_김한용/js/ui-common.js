$(function () {
  const mobileBtn = $('#header .circle_btn');
  const header = $('#header');
  const asideBtn = $('#header .m_close_btn');

  $('#header .m_close_btn').on('click', function () {
    $(this).toggleClass('on');
    asideBtn.toggleClass('on');
    $(`#header, body, #header .m_gnb_area`).toggleClass('on');
  });

  $('#header .circle_btn').on('click', function () {
    $(this).toggleClass('on');
    asideBtn.toggleClass('on');
    $(`#header, body, #header .m_gnb_area`).toggleClass('on');
  });

  $('#header .m_gnb_area .m_scroll_up .menu_info').on('click', function () {
    $(this).parent().toggleClass('on').siblings().removeClass('on');
  });

  $('#header .search_btn').on('click', function () {
    $(this).toggleClass('on');
    $(`#header, body, #header .search_modal`).toggleClass('on');
  });
  $('#header .search_close').on('click', function () {
    $(this).toggleClass('on');
    $(`#header, body, #header .search_modal`).toggleClass('on');
  });

  let mainSlider = new Swiper('.main_new_slider .swiper', {
    loop: true,
    speed: 500,
    allowTouchMove: true,
    slidesPerGroup: 1,
    breakpoints: {
      930: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
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

  let proSlider = new Swiper('.promotion_slide .swiper', {
    loop: true,
    breakpoints: {
      1201: {
        slidesPerView: 4,
        spaceBetween: 12,
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
  let productSlider = new Swiper('.products_slide .swiper', {
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
      0: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  let lastScroll = 0;
  $(window).on('scroll', function () {
    let st = $(window).scrollTop();

    if (st > lastScroll) {
      header.addClass('down');
      // console.log('dhf');
    } else {
      header.removeClass('down');
    }
    lastScroll = st;
  });
});
