// 타이머함수
// setTimeout은 주어진 시간이 되면 콜백함수 한번만 실행
// setTimeout(() => {
//   console.log('타이머함수 실행');
// }, 2000);

// 콘솔로 1초마다 10까지 출력하시오 (serInterval, clearInterval)
// let cnt = 0;
// const intervalId = setInterval(() => {
//   cnt++;
//   console.log(cnt);
//   if (cnt === 10) {
//     clearInterval(intervalId);
//   }
// }, 1000);

// 현재 주소창 확인
// console.log(location.href);
// 주소창이동
// location.href = 'http://naver.com'

// const intervalId = setInterval(() => {
//   cnt++;
//   console.log(cnt);
//   if (cnt === 5) {
//     location.href = 'http://naver.com';
//   }
// });

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

// 재사용을 위해 함수로 리팩토링
// window.addEventListener('DOMContentLoaded', function () {

//   function showCount(el, num, url) {
//     const countEl = document.querySelector(el);
//     let count = num;

//     countEl.innerHTML = count;

//     const intervalId = setInterval(() => {
//       count--;
//       countEl.innerHTML = count;

//       if (count === 0) {
//         clearInterval(intervalId);
//         location.href = url;
//       }
//     }, 1000);
//   }
//   showCount('.count', 5, 'http://naver.com');
// });

// 인코딩 디코딩
// let encodeUrl = decodeURIComponent('http://ossamuiux.com/가나다.pdf');
// console.log(encodeUrl);
// let decodeUrl = decodeURIComponent(encodeUrl);
// console.log(decodeUrl);
