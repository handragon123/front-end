// 복합자료형: 객체타입, 함수, 생성자함수, 정규표현식, 객체, 내장객체
// 배열요소는 동일자료형을 사용하는것이 원칙
// 배열은 큐(기차) 형태의 자료구조를 가짐
// let fruit = ['사과', '배', '딸기', '바나나', '수박'];
// console.log(fruit, typeof fruit, fruit.length, fruit[2]);

// 배열오른쪽에 요소 추가
// fruit.push('포도');
// console.log(fruit);

// 배열 끝 요소 삭제하고 리턴
// let last = fruit.pop();
// console.log(fruit, last);

// while 반복문(조건중심)으로 과일배열요소를 출력하시오
// let i = 0;

// while (i < fruit.length) {
//   console.log(fruit[i]);
//   i++;
// }

// for 반복문(횟수중심)으로 과일배열요소를 출력하시오
// for(초기화; 조건; 증감)
// for블럭안의 i는 지역변수
// for (let i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// for (let i = 20; i < 31; i++) {
//   console.log(i);
// }

// for (let i = 5; i <= 20; i += 5) {
//   console.log(i);
// }

// i가 증가하면 break문 사용하여 빠져나오기
// let str = '';
// // for (let i = 0; i < 6; i++) {
//   if (i == 2) {
//     break;
//   }
//   str += i + ' 번째 출력\n';
// }
// console.log(str);

// i가 2일때 출력을 건너띄기
// for (let i = 0; i < 6; i++) {
//   if (i === 2) {
//     continue;
//   }
//   str += i + '번째 출력\n';
// }
// console.log(str);

// foreach 배열 전용 반복문
// const numArr = [10, 20, 30];
// 배열 요소애 5를 곱하여 배열요소 변경
// 콜백함수: 함수 실행시 인자로 전달되는 함수
// 콜백함수 선언시 매개변수(지역변수) 활용가능
// foreach실행시 전달되는 콜백함수는 익명함수로 표현
// numArr.forEach(function (v, i) {
//   numArr[i] *= 5;
// });
// console.log(numArr);

// es6부터 익명함수는 화살표함수 사용을 권장
// numArr.forEach((v, i) => {
//   numArr[i] *= 5;
// });
// console.log(numArr);

// 강의실번호를 배열로 만든후 배열요소에 접근후 '호'를 연결하여 배열의 데이터를 변경하시오(forEach문으로 '호'를 연결하여 배열데이터 변경)
// 처음배열: classNumber = ['701', '702', '703'];
// 결과 : classNumber = ['701호','702호','703호']
// const classNumber = ['701', '702', '703'];
// classNumber.forEach((v, i) => {
//   classNumber[i] += '호';
// });
// console.log(classNumber);

// 배열요소를 반복탐색(forEach)하다가 배열요소가 '아저씨'일 경우
// 아저씨를 할머니로 바꾸기(movieArr.splice(i,1,'할머니'))
// movieArr.splice(배열인덱스, 지울갯수, '바꿀값')

// 배열요소의 길이와 위치는 바뀔수있음
// const movieArr = ['타짜','아저씨','어벤져스'];
// 결과: movieArr = ['타짜', '할머니', '어벤져스'];
// const movieArr = ['바보', '타짜', '아저씨', '어벤져스'];
// 배열요소추가
// splice(인덱스, 지울갯수, 추가할요소)
// movieArr.splice(1,0,'수퍼맨')

//배열요소 삭제
// movieArr.splice(0, 1);

// 특정인덱스 요소 변경
// movieArr.splice(1, 1, '할머니');
// forEach에서 break, continue 사용 불가하며 for of 사용하면 안됨
// movieArr.forEach((v, i) => {
//   if (movieArr[i] === '아저씨') {
//     movieArr.splice(i, 1, '할머니');
//   }
//   console.log(i + '번째 반복');
// });
// console.log(movieArr);

// 포도 제외하고 '는맛있어' 문자열 연결하기 (for,continue)
const fruit2 = ['사과', '딸기', '포도', '수박'];
for (i = 0; i < fruit2.length; i++) {
  if (fruit2[i] === '포도') {
    continue;
  }
  fruit2[i] += '는 맛있어';
}
console.log(fruit2);
