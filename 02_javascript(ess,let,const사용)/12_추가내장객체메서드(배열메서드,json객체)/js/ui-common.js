const fruit = ['사과', '배', '딸기'];

// 배열 인덱스 찾기
// console.log(fruit.indexOf('딸기'));

// 배열요소 '딸기'앞에 바나나를 추가하시오(딸기요소의 위치는 모름)
// indexOf(), splice()사용
let idx = fruit.indexOf('딸기');
// console.log(idx);

// 특정인덱스 요소 삭제
// fruit.splice(idx, 1);

// 특정인덱스에 요소 추가
fruit.splice(idx, 0, '바나나');

// 특정인덱스 요소를 다른요소로 변경
// fruit.splice(idx, 1, '바나나');
// console.log(fruit);

// 과일배열에 '는 맛있어'를 모두 추가하시오(forEach사용)
// fruit.forEach((v, i) => {
//   fruit[i] += '는 맛있어';
// });
// console.log(fruit);

const num = [100, 200, 300];

// num에 *5를 하여 새로운 배열로 만들기
// const newNum = num.map((v) => {
//   return v * 5;
// });
// console.log(newNum);

//화살표함수에서 문장이 한줄일경우 return 생략가능
// const newNum = num.map((v) => v * 5);
// console.log(newNum);

// 원본배열중 200이상인 요소로 새로운 배열로 만들기
// const num2 = num.filter((v) => v >= 200);
// console.log(num2);

// 모든 배열요소가 조건을 만족하는지 확인
// let result = num.every((v) => {
//   return v >= 100;
// });
// console.log(result);

// 배열의 왼쪽(prev)부터 오른쪽(current)으로 연산(누산)
// let sum = num.reduce((prev, current) => {
//   return prev + current;
// });
// console.log(sum);

// JSON: 프론트와 백엔드의 객체표기법이 다르므로 JSON 문자열로 변환하여 전달한뒤 해당언어의 객체로 변경하여 사용
const car = {
  name: 'sonata',
  model: 400,
  color: 'red',
};
console.log(car);

// js객체 -> JSON객체
const carJSON = JSON.stringify(car);
console.log(carJSON);

const studentJSON = `{
  "grade":90,
  "name":"hanyong",
  "pass":true
}`;
const student = JSON.parse(studentJSON);
console.log(student);

let str = '         hi  ';
let str2 = str.trim();
console.log(str2);
