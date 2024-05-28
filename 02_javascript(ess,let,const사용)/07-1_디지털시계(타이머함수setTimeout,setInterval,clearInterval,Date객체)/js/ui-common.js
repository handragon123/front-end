// 타이머함수
// setTimeout은 주어진 시간이 되면 콜백함수 한번만 실행
// setTimeout(() => {
//   console.log('타이머함수 실행');
// }, 2000);

// 화면에 5부터 0까지 카운트 보여주고 네이버로 이동하기
// window.addEventListener('DOMContentLoaded', function () {
//   const countEl = document.querySelector('.count');
//   let count = 5;

//   countEl.innerHTML = count;

//   const intervalId = setInterval(() => {
//     count--;
//     countEl.innerHTML = count;

//     if (count === 0) {
//       clearInterval(intervalId);
//       location.href = 'http://naver.com';
//     }
//   }, 1000);
// });

window.addEventListener('DOMContentLoaded', function () {
  const secEl = document.querySelector('.clock .sec');
  const hourEl = document.querySelector('.clock .hour');
  const minEl = document.querySelector('.clock .min');
  const msecEl = document.querySelector('.clock .msec');

  // 처음에 시간표시하고 초마다 시간표시해야하므로 함수
  function clock() {
    const date = new Date();

    // 시간정보가져오기
    let hour = date.getHours();
    let sec = date.getSeconds();
    let min = date.getMinutes();
    // 밀리세컨 세자리를 두자리로 변경
    let msec = Math.floor(date.getMilliseconds() / 10);

    // 숫자 한자리가 될경우 두자리 숫자로 바꿔줌
    function digit(num) {
      // 리턴이 필요하며 조건에 의한 결과가 두가지이므로 삼항
      return num < 10 ? '0' + num : num;
    }

    // 요소에 html로 넣어둠
    secEl.innerHTML = digit(sec);
    hourEl.innerHTML = digit(hour);
    minEl.innerHTML = digit(min);
    msecEl.innerHTML = digit(msec);
  }
  clock();
  // 세자리 숫자 -> 두자리 숫자
  // 버림
  // console.log(Math.floor(956 / 10));
  // 반올림
  // console.log(Math.round(956 / 10));
  // 올림
  // console.log(Math.ceil(956 / 10));
  // 1/100초마다 카운트
  setInterval(clock, 10);
});
