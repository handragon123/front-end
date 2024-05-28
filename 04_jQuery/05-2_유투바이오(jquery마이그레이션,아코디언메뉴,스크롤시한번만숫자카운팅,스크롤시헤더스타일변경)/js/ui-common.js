$(function () {
  const header = $('#header');
  const langBtn = $('#header .lang_btn');

  $('#header .lang_btn').on('click', function () {
    $(this).parent().toggleClass('on');
  });

  $('#header .sitempa_btn').on('click', function () {
    $(this).toggleClass('on');
  });

  $('#header .menu_btn').on('click', function () {
    $(this).toggleClass('on');
    langBtn.toggleClass('on');
    $(`body, #header .m_gnb_area`).toggleClass('on');
  });

  $(window).on('scroll', function () {
    let st = $(window).scrollTop();

    if (st >= 100) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  });

  // 모바일 아코디언 메뉴
  // jquery slideUp, slideDown 메서드는 이벤트발생횟수만큼 반복실행되므로
  // 사용하지말고 css max-height방식 사용하면 이벤트발생횟수만큼 반복되지않음
  $('#header .m_gnb>li>a').on('click', function () {
    $(this).parent().toggleClass('on').siblings().removeClass('on');
  });

  // 주식정보 숫자 카운팅
  function countNum(el, initNum, finalNum) {
    const infoEl = $(el);
    let isScroll = false;

    function handlescroll() {
      let st = $(window).scrollTop();
      // 요소가 화면 아래에서 위로 올라올들어올때
      // 조건식이 너무 길어지므로 변수로 사용
      let posY = infoEl.offset().top - $(window).outerHeight();

      // scroll이벤트에서 한번만 실행하기
      // isScroll를 false로 초기화후 스크롤시 true로 변경해줌
      if (st >= posY && isScroll === false) {
        let interval = setInterval(() => {
          initNum += 20;
          infoEl.find('.num strong').text(initNum);

          if (initNum >= finalNum) {
            infoEl.find('.num strong').text(finalNum);
            clearInterval(interval);
          }
        }, 10);
        isScroll = true;
      }
    }
    // 요소가 문서 위에 있을 경우 스크롤이벤트가 발생하지 않으므로
    // trigger로 스크롤이벤트 처음 한번 강제 실행
    $(window).on('scroll', handlescroll);
  }
  countNum('.main_info .col1', 0, 4234);
});
