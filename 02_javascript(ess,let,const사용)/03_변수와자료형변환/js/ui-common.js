// 산술연산자: +, -, *, /, %
// 연결연산자: + 문자일경우 연결됨
// 비교연산자, 일치연산자: >, >=, ===, <=, <, !==
// 대입연산자: =
// 논리연산자: $$(그리고) ||(또는) !(not)

//전역변수 선언과 초기화
let num = 100;

// num 변수공간에 num의 값 100에 200을 더하여 대입 - 대입연산자 왼쪽은 빈 공간.
// num = num + 200;

// 복합대입연산자
num += 200;
// console.log(num);

let num2 = 5;
num2 *= 10;
// console.log(num2);

// 증감연산자 (++, --)
// 전위, 후위 연산이 있으며 문장에서는 동일하다
// 함수의 인자로 증감연산을 전달하면 전위일 경우 연산이 먼저되어 후위는 연산이 나중에 일어남
let num3 = 0;
// num3++; , ++num3 = 1
// num3++; , ++num3 = 2
// num3--; = --num3 = 1
// console.log(num3++);
// console.log(num3);

// prompt 내장함수
// window 최상위 객체는 생략가능
// window.prompt();
// 함수실행시 ()안에 인자(함수내부로 전달되는 값)를 전달해야함
// const username = prompt('당신의 이름은?', '은가누');
// alert(username);

// const isOK = confirm('진행하겠습니까?');

// if (isOK) {
//   console.log('진행중');
// } else {
//   console.log('취소');
// }

// 입력된 구매갯수에 보너스를 더하여 출력
let bonus = 5;

// 사용자가 입력한 데이터는 모두 문자로 들어옴
// let amount = prompt('구매갯수를 입력하세요');
// amount는 문자이므로 숫자로 형변환
// Number 전역함수는 문자가 섞여있을 경우 NaN임
// console.log('총구매갯수: ', Number(amount) + bonus);

// parseint 전역함수는 문자가 섞여있어도 숫자로 형변환해줌
// console.log('총구매갯수: ', parseInt(amount) + bonus);

let num4 = '100원';
console.log(parseInt(num4));

// 연산우선순위에 의해 자동형변환
// +는 문자우선
console.log(10 + '20');

// *는 숫자우선
console.log(10 * '20');

// 연산우선순위 변경시 ()사용
console.log((10 + 5) * 5);
