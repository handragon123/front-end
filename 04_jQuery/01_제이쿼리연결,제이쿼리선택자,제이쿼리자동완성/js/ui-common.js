// 자바스크립트 객체를 $()넣으면 제이커리 객체로 변환
// 메서드에 취소선이있으면 deprecate 더이상 사용되지 않음이므로 사용자제
// $(document).ready(function () {})

// ready 축약형
// document.addEventListener('DOMContentLoaded')와 같음
$(function () {
  // $('#header').css('border', '4px solid red');
  $('#header .gnb>li').css('border', '4px solid red');
});
