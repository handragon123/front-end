// 함수선언식
// 함수명은 동사 + 명사
// ex. 팝업을 띄우는 함수 = showPopup, 데이터 가져오는함수 = fetchData, 애니메이션 관련 = animateGnb
// 함수선언식은 선언부코드가 호이스팅(선언위치에 관계없이 먼저 읽혀짐)

// 함수선언식은 실행하지않더라도 코드를 먼저 읽기때문에 스크립트 로딩이 표현식보다 조금더 걸림
// 하지만 선언순서와 관계없이 자유롭게 호출이 가능하여 함수임을 명확히 알 수 있으므로 함수선언식권장
// function fn1() {
//   console.log('함수실행');
// }

//함수호출
// fn1();

// 함수표현식
// 호이스팅이 없으므로 선언부 아래에서만 사용가능
// const fn2 = function () {
//   console.log('함수2 실행');
// };
// fn2();

// 다른함수의 인자로 전달되는 콜백함수를 익명함수로 선언할 경우는 화살표 함수를 권장
// function fn3(callback) {
//   console.log('fn3함수의 로직이 실행됨');
//   callback();
// }

// fn3(() => {
//   console.log('콜백함수 실행');
// });

// 매개변수, 리턴
// return키워드는 함수내부의 결과를 외부로 보내거나 함수 종료
// return 걸면 함수실행이 종료됨
// function sum(num1, num2) {
// if (num1 === 20) {
//   return;
// } else {
//   return num1 + num2;
// }
// return이 없어도 return undefined가 함수 마지막에 실행됨
// return undefined;
// }

// 인자: 함수실행시 함수내부로 전달되는 값
// let result = sum(20, 30);
// console.log(result);

// function plusTen(x) {
//   return x + 10;
// }
// console.log(plusTen(3));

// 가변인자함수로 숫자를 입력받아 모두 더한 결과를 함수밖에서 콘솔로 출력하기
// 모든함수에 arguments유사배열에 제공되며 유사배열이므로 배열메서드 사용불가
// ess5
// function Num() {
//   let sum = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
// let result = Num(10, 20);
// console.log(result);

// es6
// rest 파라메터
// function plusNum(...rest) {
//   let sum = 0;

//   rest.forEach((v, i) => {
//     sum += v;
//   });
//   return sum;
// }
// let result = plusNum(10, 20, 30);
// console.log(result);

// 함수스코프: 함수의 유효범위
// 내부함수에선 자신안에서 선언한 변수, 부모함수, 전역에 접근가능
// 밖에서 안으로 접근 불가
let global = '전역변수';

function outerFn2() {
  console.log('외부함수2');
}

function outerFn() {
  function innerFn() {
    let local = '지역변수';
    console.log(local);
    outerFn2();
  }
  innerFn();
}
outerFn();

// 즉시실행함수(IIFE)
// 익명함수를 실행시킬때 사용
// (() => {
//   console.log('익명함수실행');
// })();

// 재귀함수 : 자신을 호출하는 함수, 조건을 처리하여 무한루프 안걸리게 해야함.
// 5 펙토리얼을 구하시오
// function factorial(num) {
//   if (num === 1) return 1;

//   return num * factorial(num - 1);
// }
// let result = factorial(5);
// console.log(result);

// 콜백함수: 함수실행시 인자로 전달디는 함수
// 콜백함수는 비동기방식(순서대로 실행될필요없동작)으로 작동
// 코드의 순서를 변경할 수 없는 경우 1번째 실행을 먼저 하려면?

fn4(() => {
  console.log('2번째 실행될 내용');
});
function fn4(callback) {
  console.log('1번째 실행될 내용');
  callback();
}

setTimeout(() => {
  console.log('타이머함수 실행');
}, 2000);

// 이벤트핸들러는 화살표함수 사용 자제
// 객체리터럴
const obj = {
  msg: 'hi',
};

// 함수의  this는 window이며 call() 메서드로 this를 특정객체를 가리키도록 변경할수있음
// 화살표함수의 this는 부모함수의 this와 같음
// 즉, 화살표함수는 생성시 this가 결정됨
// 이벤트헨들러에서 this는 이벤트연결대상을 가르켜야함
// function test() {
//   console.log(this);
// window.addEventListener('DOMContentLoaded', function () {
//   console.log(this);
// });
// }
// test.call(obj);

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.test_btn').addEventListener('click', function () {
    this.innerHTML = '안녕';
  });
});
