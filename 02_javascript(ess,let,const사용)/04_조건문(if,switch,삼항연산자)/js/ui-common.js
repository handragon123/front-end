// prompt로 만 나이를 입력받아 19이상이면 성인 19 미만이면 미성년자를 콘솔로 출력
// const age = prompt('만나이를 입력하시오');
// console.log(age);
// 조건이 관련되있을 경우 else로 이어줌
// 조건이 true이면 위쪽문장이 실행, false이면 else문장이 실행
// if (age >= 19) {
//   console.log('성인입니다');
// } else {
//   console.log('학생입니다');
// }

// prompt로 숫자를 입력받아 짝수이면 짝수입니다
// 홀수이면 홀수입니다를 콘솔로 출력하시오
// const result = prompt('숫자를입력하시오');

// 조건을 명시적으로 작성하는 것이 좋음
// if (result % 2 === 0) {
//   console.log('짝수입니다');
// } else {
//   console.log('홀수입니다');
// }

// if (result % 2) {
//   console.log('홀수입니다');
// } else {
//   console.log('짝수입니다');
// }

// // 삼항연산자(짧은 조건문): 조건에 의해 실행되는 문장이 두개일떄
// result % 2 === 0 ? console.log('짝수입니다') : console.log('홀수입니다');

// prompt 로나이를 입력받아 10대, 20대, 30대 이상으로 출력하시오
// let age = prompt('나이를 입력하시오');
// if (age >= 30) {
//   console.log('30대이상');
// } else if (age >= 20 && age < 30) {
//   console.log('20대');
// } else {
//   console.log('10대');
// }

// 중첩if
// 아이디가 맞으면 패스워드가 맞는지 판단하여 로그인시키기(중첩if, 아이디가 없으면 아이디없음 출력, 패스워드가 틀리면 패스워드 틀림 출력)
// const userId = 'hanyong';
// const password = '1234';
// if (userId === 'hanyong') {
//   console.log('아이디있음');
//   if (password === '1234') {
//     console.log('로그인');
//   } else {
//     console.log('비번틀림');
//   }
// } else {
//   console.log('아이디없음');
// }

// 주어진 변수가 60이상 100이하인지 판단하여 콘솔로 출력(논리연산자)
// 조건에 맞으면 60이상 100이하의 수
// 조건에 맞지않으면 60이상 100이하의 수가 아님 출력
// let num5 = 40;
// if (num5 >= 60 && num5 <= 100) {
//   console.log(num5);
// } else {
//   console.log('60이상 100이하의 수가아님');
// }

// 혈액형을 prompt로 입력받아 사람의 혈액형인지 판단하시오
// 혈액형이 A,B,AB,O이면 사람입니다 아니면 동물입니다 출력(논리연산자)
// 추가조건: 빈칸일경우 혈액형을 대문자로 입력하세요를 alert으로 띄우기
// let blood = prompt('혈액형을 입력하시오');
// if (blood) {
//   alert('혈액형을 대문자로 입력하시오');
// } else {
//   // trim 공백제거기능
//   blood = blood.toUpperCase().trim();
//   if (blood === 'A' || blood === 'B' || blood === 'AB' || blood === 'O') {
//     console.log('사람입니다');
//   } else {
//     console.log('동물입니다');
//   }
// }

// switch조건문으로 짝홀수 판단하기
// break는 제어문을 빠져나갈때 사용
// 조건에 의한 값이 정해져있고 5개이상일 경우 주로사용
// let num6 = prompt('정수를 입력하세요');
// switch (num6 % 2) {
//   case 0:
//     console.log('짝수');
//     break;
//   case 1:
//     console.log('홀수');
//     break;
//   default:
//     alert('정수를 입력하세요');
//     break;
// }

// date객체를 이용하여 오늘의 요일을 콘솔에 출력하시오(switch)
// const date = new Date();
// //일요일부터0 1 2 3 4 5 6
// switch (date.getDate()) {
//   case 0:
//     console.log('일요일');
//     break;
//   case 1:
//     console.log('월요일');
//     break;
//   case 2:
//     console.log('화요일');
//     break;
//   case 3:
//     console.log('수요일');
//     break;
//   case 4:
//     console.log('목요일');
//     break;
//   case 5:
//     console.log('금요일');
//     break;
//   case 6:
//     console.log('토요일');
//     break;
//   default:
//     console.error('날짜객체를 확인할 수 없습니다');
//     break;
// }

// num이 한자리숫자면 '0'을 붙여 두자리로 만들기(삼항연산자)
let num7 = 8;
// 삼항연산자는 조건에 따른 문장이 리턴되므로 변수에 대입하여 사용가능
let newNum = num7 < 10 ? '0' + num7 : num7;
console.log(newNum);
