$(function () {
  // gnb>li로 할 경우 불필요하게 여러번 실행되므로 .gnb로 처리
  $('#header .gnb')
    .on('mouseenter', function () {
      $('#header').addClass('on');
    })
    .on('mouseleave', function () {
      $('#header').removeClass('on');
    });
});
