// 변수선언과 초기화
// es5 버전
// 오른쪽값을 변수 test에 대입연산자로 초기화
// var은 변수선언전에 사용이 가능한 문제 있음(변수호이스팅)
// 1.  var없이도 변수 선언이 가능하며 전역에 생성됨
// test = 100;
// console.log(window.test);

// 2.  반복문에서 변수선언시 전역변수가 만들어짐
// var은 함수스코프이므로 함수내부가 아닐경우 전역변수가 되버림
// for (var i = 0; i < 5; i++) {
//   console.log(i, '===');
// }
// console.log(window.i);

// es6 버전
// let, const로 변수선언
// 선언전에 사용불가
// 키워드없이 변수선언 가능하나 키워드 사용해야함
// 3.  let, const는 블럭스코프임
// let, const없이 변수선언시 전역변수로 생성되므로 키워드 반드시써야함
{
  // 중괄호 생성후 변수 생성시 중괄호 안에서만 쓸수있는 지역변수
  let test2 = 'hi';
  console.log(test2);
}

// i는 for블럭에 선언된 지역변수
for (let i = 0; i < 10; i++) {
  console.log(1);
}
// for블럭의 지역변수를 밖에서는 참조 불가
// console.log(1);

document.addEventListener('DOMContentLoaded', function () {
  // const는 상수자료형을 저장할 경우 사용
  // 변수 사용 안할시 회식으로 뜸
  const wrap = document.getElementById('wrap');
  // wrap = 200;
  // 상수형 변수는 다른값으로 재할당 할수 없음
  // console.log(wrap);

  // let str = '안녕';
  // str = str + '하세요';
  // console.log(str);
});

// 카멜표기법: 변수, 함수명
let userId = 'ossam';
let txt5 = '그냥 글자';
// 키워드를 변수명으로 사용할떄
let _this = this;
// 제이쿼리객체를 변수에 저장시 사용하지만 우린 사용하지 않을것
// let $header = $('#header');
console.log(userId, txt5, _this);

// 자료형(데이터타입)
// string 타입
let str = '안녕하세요!!';
console.log(str);

// Number 타입 숫자에 ''사용하면 문자로취급
let num = 999;
let num2 = '999';
console.log(num, typeof num, typeof num2);

// boolean타입은 스위치로직에 사용함
// 변수명은 주로 명사를 사용하며 불린 타입으로 요소의 상태를 의미할경우 is를 붙임
let isShow = true;
console.log(isShow, typeof isShow);

// 데이터가 들어오는 변수이며 변수를 미리 선언해야 할 경우
let isMobile;
console.log(isMobile, typeof isMobile);

// null타입은 동적으로 객체가 들어올경우, 개발자가 값이 없음을 명시적으로 나타낼 경우
const obj = null;

// NaN: Not a  Number의 약자이며 연산불가라는 뜻
console.log(10 * '문자');

// 문자열에서 + 는 연결연산
let str2 = '안녕';
let str3 = '하세요?';
console.log(str2 + str3);

// 숫자에서 +는 산술연산
let num3 = 100;
let num4 = 200;
console.log(num3 + num4);

// 이스케이프문자
// alert - 사이트 접속시 알림창 기능
// alert('이스케이프문자로\n줄바꿈하기');

// 산술연산자, 나머지연산자
let num5 = 101;
console.log(num5 % 2);

if (num % 2 === 0) {
  console.log('짝수');
} else {
  console.log('홀수');
}

// 비교연산자의 결과는 불린
console.log(100 < 0);

// false 로 판정되는 값 - 빈값
// '', false, 0, -0, NaN, undefined, null
let test3 = null;

if (test3) {
  console.log('조건이 true');
} else {
  console.log('조건이 false');
}

// 논리연산자(&&, ||, !)
// &&는 그리고 이므로 모든 조건이 true일때만 true
// console.log(100 == 100 && 99 == 99);
// ||는 또는 이므로 조건이 하나이상이라도 true면 true
// console.log(100 == 99 || 99 == 99);
// 불린값 앞에 !붙이면 반대값이 나옴
console.log(!'');
// '==' 두개는 자동형변환 특성에 의해 자동으로 형 변환을 하므로 같은 데이터로 봄
console.log(100 == '100', '====');
// '==='일치연산자로 값과 자료형을 모두 비교해야함
console.log(100 === '100');
// '===', '==!' 일치연산자 사용 '=='사용금지
