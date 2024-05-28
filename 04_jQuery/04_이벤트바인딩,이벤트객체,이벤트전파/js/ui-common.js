$(function () {
  // stop(): 이전효과메서드를 멈춰줌
  // 동일요소에 이벤트 걸 경우 메서드체인으로 연결
  // css 후버같은 역힐
  // focus = 키보드 접근성 tab키로 in,out가능
  $('#header .gnb>li')
    .on('mouseenter focusin', function () {
      $(this).find('.depth2').stop().slideDown();
    })
    .on('mouseleave focusout', function () {
      $(this).find('.depth2').stop().slideUp();
    });

  // 5번 클릭후이벤트 삭제하기
  let cnt = 0;
  $('#header .test_btn').on('click', function () {
    cnt++;
    $(this).text(cnt);

    if (cnt === 5) {
      $('#header .test_btn').off('click');
    }
  });

  // 스크롤바의 스크롤영역은 문서높이와 일치함
  // 스크롤 이벤트는 스크롤전에 발생하지않으므로 trigger로 강제발생시켜야함
  // $(window)
  // .on('scroll', function () {
  // 스크롤바 y위치 판단
  // let st = $(this).scrollTop();
  // console.log(st);
  // })
  // .trigger();

  // 창크기판단
  // $(window).outerWidth(): 스크롤바(17px) 포함한 크기
  // $(window).innerWidth(): 스크롤바(17px) 제외한 크기

  $(window)
    .on('resize', function () {
      let winW = $(this).outerWidth();
      // let winW = $(this).innerWidth();
      // console.log(`창가로길이: ${winW}`);
      if (winW > 1200) {
        console.log('데스크탑 분기점');
      } else if (winW >= 768 && winW <= 1200) {
        console.log('테블릿 분기점');
      } else {
        console.log('모바일');
      }
    })
    .trigger('resize');

  // border + padding + width
  // 일반적으로 outerWidth() 사용
  console.log($('#header .test_btn').outerHeight());
  // 선을 뺀 크기
  // padding + width;
  console.log($('#header .test_btn').innerWidth());
  // width;
  console.log($('#header .test_btn').width());

  //키보드 이벤트
  // keyup: 키를 눌렀다 뗏을때, 사영자가 입력을 끝마쳤을때
  // val(): 입력필드의 value값 가져오기(getter)
  // varl('안녕'): value값 변경(setter)
  $('header .search').on('keyup', function () {
    console.log($(this).val());
  });

  // 입력필드로 포커스 강제이동
  $('#header .search').trigger('focus');

  $(window).on('mousemove', function (e) {
    // 브라우저화면상의 좌표
    // console.log(e.clientX, e.clientY);

    console.log(e.pageX, e.pageY);
  });

  // 이벤트전파: 하위요소에서 상위요소로 이벤트가 전파됨(버블링)
  $('.main_etc').on('click', function () {
    $(this).css('border', '5px solid red');
  });

  $('.tit_wrap').on('click', function () {
    $(this).css('border', '5px solid red');
  });

  $('.tit_wrap h2').on('click', function (e) {
    //이벤트 상위전파 막기
    e.stopPropagation();
    $(this).css('border', '5px solid red');
  });
  //a 기본이벤트막기
  // 상위전파막기
  // 동일요소에 동일이벤트 있을경우 다른이벤트 막기
  $('.link').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
  });

  $('.link').on('click', function (e) {
    alert('백엔드에서 작업한 내용');
  });
});
