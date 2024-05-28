$(function () {
  // 필터 선택자
  // $('#header .gnb>li:eq(2)').css('border', '3px solid red');
  // $('#header .gnb>li:nth(2)').css('border', '3px solid red');
  let idx = 3;

  // ``벡틱 사용
  // $(`#header .gnb>li:eq(${idx})`).css('border', '3px solid red');
  // 변수값 사용
  // $('#header .gnb>li').eq(idx).css('border', '3px solid red');
  // 홀수 선택
  // $('#header .gnb>li:even').css('border', '3px solid red');
  // 짝수 선택
  // $('#header .gnb>li:odd').css('border', '3px solid red');
  // gt great than(숫자) 숫자보다 큰 나머지 형제요소 적용
  // $('#header .gnb>li:gt(2)').css('border', '3px solid red');
  // lt less than(숫자) 숫자보다 작은 나머지 형제요소 적용
  // $('#header .gnb>li:lt(1)').css('border', '3px solid red');
  $('#header .gnb>li').css({ border: '3px solid red', background: 'pink' });
});
