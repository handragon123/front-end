// ready이벤트 축약형으로 항상 시작
$(function () {
  // 함수블럭안에서 선언한 지역변수
  // let idx = 0;

  //on 메서드: js addEventListener와 동일
  $('#header .gnb>li').on('click', function () {
    // this는 자바스크립트 DOM
    // console.log(this);
    // js this -> 제이쿼리 객체로 변환하여 제이쿼리 메서드 사용
    // 이벤트 걸린 요소
    // console.log($(this));
    // $(this).css('background', 'gray');
    // children 자식선택자
    // $(this).children().css('background', 'gray');
    // fint 하위 요소 선택
    // $(this).find('>a').css('background', 'gray');
    // $(this).find('.depth2').css('background', 'gray');
    // $(this).prev().css('background', 'gray');
    // $(this).prevAll().css('background', 'gray');
    // $(this).next().css('background', 'gray');
    // $(this).nextAll().css('background', 'gray');
    // 자신을 제외한 형제요소 선택
    // $(this).siblings().css('background', 'gray');
    // 부모요소 선택
    // $(this).parent().css('background', 'gray');
    // 조상요소 선택
    // $(this).closest('#header').css('background', 'gray');
    // $('#header .gnb>li').filter('.gnb2').css('background', 'gray');
    // 선택된 그룹요소중 특정 요소 선택
    // $(this).css('background', 'gray').find('>a').text('배고파');
    // end() 사용시 이전선택된 요소로 돌려줌
    $(this)
      .css('background', 'gray')
      .find('>a')
      .text('배고파')
      .end()
      .css('border', '5px solid red');
  });
});
