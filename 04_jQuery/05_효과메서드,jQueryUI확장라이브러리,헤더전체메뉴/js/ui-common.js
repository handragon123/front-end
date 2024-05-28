$(function () {
  // 이벤트핸들러안에서 $(this)는 이벤트걸린 요소
  // 이벤트핸들러에서 화살표함수 사용시 this가 변경되므로 사용금지
  // addClass사용시 .없이 클래스명만 사용
  // 클릭시마다 addClass, removeClass 반복하기(toggleClass사용하지말것)
  // let toggleBtn = true;
  // $('#header .test_btn').on('click', function () {
  //   if (toggleBtn) {
  //     $(this).addClass('on');
  //     // toggleBtn = false;
  //   } else {
  //     $(this).removeClass('on');
  //     // toggleBtn = true;
  //   }
  //   // 부정연산자 이용하여 반대값 넣어주기
  //   toggleBtn = !toggleBtn;
  // });

  $('#header .test_btn').on('click', function () {
    $(this).toggleClass('on');
  });

  // $('#header .lang_btn').on('click', function () {
  //   $(this).toggleClass('on');

  //   // hasClass()로 클래스 존재유무 판단하여 불린값 리턴
  //   if ($(this).hasClass('on')) {
  //     $(this).next().show();
  //     $(this).next().find('a').text('한국어');
  //   } else {
  //     $(this).next().hide();
  //   }
  // });

  // slideDown(): 요소 기준이 위면 아래로 늘어나고, 기준이 아래면 위로 늘어남
  $('#header .gnb>li')
    .on('mouseenter', function () {
      $(this).find('.depth2').slideDown();
    })
    .on('mouseleave', function () {
      $(this).find('.depth2').slideUp();
    });

  // stop(): 효과메서드 앞에 연결하여 이전효과를 멈춰줌
  $('#header .lang_btn').on('click', function () {
    $(this).next().stop().slideToggle();
  });

  // 제이쿼리는 display:none인 요소를 보여줄때 요소의 원래 display로 보여줌
  // display:flex구조 사용시 display:none대신 .hide()메서드 사용해야함
  $('#footer .top_btn').hide();

  // 효과메서드 시간은 기본값 400ms이며 변경가능
  // toggle메서드들은 click이벤트에서만 사용
  $(window).on('scroll', function () {
    let st = $(this).scrollTop();

    if (st >= 200) {
      $('#footer .top_btn').fadeIn(1000);
    } else {
      $('#footer .top_btn').fadeOut(1000);
    }
  });

  // ease값은 jQuery-ui 라이브러리 연결해야 사용가능
  $('.main_etc .test_btn').on('click', function () {
    $('.main_etc .box').animate(
      { left: 400, top: 200 },
      1200,
      'easeInOutElastic',
      function () {
        $(this).css('background', 'red');
      }
    );
  });

  // 변수값 활용시 animate메서드 사용
  $(document).on('mousemove', function (e) {
    console.log(e.clientX, e.clientY);

    $('.circle').stop().animate({ left: e.clientX, top: e.clientY });
  });
});
