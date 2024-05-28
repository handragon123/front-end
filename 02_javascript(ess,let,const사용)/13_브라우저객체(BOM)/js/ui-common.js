window.addEventListener('DOMContentLoaded', function () {
  // console.log('dom 로딩이완료되면 실행');
  // load함수는 DOM보다 무조건 늦게 실행됨
  // window.addEventListener('load', function () {
  //   console.log('이미지 완료되면 실행');
  // });
  // 정규표현식 - 폼요소의 유효성검증시 주로 사용, /정규식/옵션(flag)
  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  if (isMobile()) {
    document.querySelector('.txt').innerHTML = '모바일 브라우저';
    console.log('모바일 브라우저');
  } else {
    document.querySelector('.txt').innerHTML = 'PC브라우저';
    console.log('PC브라우저');
  }
  //이메일 정규식
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  console.log(emailRegex.test('hanyong8254@naver.com'));
});
