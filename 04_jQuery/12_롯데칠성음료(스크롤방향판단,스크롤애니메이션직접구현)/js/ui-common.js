$(function () {
  let prevSt = 0;
  let nextSt = 0;

  // 스크롤방향판단
  $(window)
    .on('scroll', function () {
      // 나중에 발생한 scroll이벤트에서의 스크롤값
      nextSt = $(this).scrollTop();
      // console.log('이전스크롤값: ' + prevSt, '다음스크롤값: ' + nextSt);

      // iOS scrollTop 음수대응
      if (nextSt >= 0) {
        if (prevSt < nextSt) {
          // 아래로 스크롤
          $('#header').addClass('on');
        } else {
          // 위로 스크롤
          $('#header').removeClass('on');
        }
      }
      prevSt = nextSt;
    })
    .trigger('scroll');

  // .main_company가 아래에서 위로 올라올때 .main_tit를 페이드로 보이기(1번만)
  // .main_company가 뷰포트 상단까지 스크롤될 경우 .main_tit를 fixed(스크롤시 초기화하여 여러번 동작)
  // .main_company가 뷰포트 상단까지 스크롤된후 300px 더 스크롤된후 .main_tit를 opacity로 안보이게
  function mainScrollAnimation(el) {
    // 요소가 없으면 return걸어 함수빠져나가기
    if (!$('.main_company').length) return;

    // jquery반복문 - i: index, v: 요소(자바스크립트 dom)
    $('.scroll_section').each((i, v) => {
      $(window)
        .on('scroll', function () {
          let st = $(window).scrollTop();

          // 요소가 아래에서 뷰포트로 들어올때
          // v는 자바스크립트 dom이므로 제이쿼리 객체로 변환
          let posY = $(v).offset().top - $(window).outerHeight() + 200;
          // 요소가 뷰포트 상단까지 스크롤
          let posY2 = $(v).offset().top;

          if (st >= posY) {
            $(v).find('.main_tit').addClass('show');
          }

          if (st >= posY2) {
            $(v).find('.main_tit').addClass('fixed');
          } else {
            $(v).find('.main_tit').removeClass('fixed');
          }

          if (st >= posY2 + 300) {
            $(v).find('.main_tit').addClass('hide');
          } else {
            $(v).find('.main_tit').removeClass('hide');
          }
        })
        .trigger('scroll');
    });
  }
  mainScrollAnimation();
});
