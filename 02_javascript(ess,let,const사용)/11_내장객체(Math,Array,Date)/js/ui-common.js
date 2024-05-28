// 배열객체를 다른 배열로 바꿀일은 없으므로 const
const fruit = ['사과', '배', '딸기'];
const fruit2 = ['바나나', '포도'];
// fruit = [100, 200];

// 배열연결하여 새로운 배열 만들기
console.log(fruit.concat(fruit2));

// 배열을 문자로 변경
// 배열에 구분자가 없으므로 구분자는 직접 넣어줌(빈칸: '')
console.log(fruit.join(','));

// 배열의 왼쪽요소 삭제하고 리턴
console.log(fruit.shift(), fruit);

// 배열의 왼쪽에 요소 추가
fruit.unshift('수박');
console.log(fruit);

const str = ['가', '나', '다'];
console.log(str.reverse());

const num = [10, 30, 5, 100, 90];

// 오름차순 정렬
// a, b는 배열왼쪽과 오른쪽요소를 의미하며 비교함수에 의해
// 정렬알고리즘이 작동함
num.sort((a, b) => {
  return a - b;
});

// 내림차순 정렬
num.sort((a, b) => {
  return b - a;
});
console.log(num);

const strArr = ['가', '다', '나', '차', '사'];

// 문자오름차순은 비교함수없이 사용
console.log(strArr.sort());

// 문자내림차순
// sort()의 리턴이 배열이므로 reverse()를 메서드체인으로 사용가능
console.log(strArr.sort().reverse());

// date객체는 생성자함수로 만들어져있으므로 new키워드로
// 인스턴스(복제본)를 만든후 사용함
const date = new Date();
console.log(date, typeof date);

// 해당지역의 날짜형식에 맞는 문자열로 변환
console.log(date.toLocaleString());
console.log(date.toTimeString());

let num2 = 10.4;

// 소수 버리고 정수변환
console.log(Math.floor(num2));
// 소수 반올림하고 정수변환
console.log(Math.round(num2));
// 소수 올리고 정수변환
console.log(Math.ceil(num2));

// 랜덤수 만들기
// 0 - 1미만의 랜덤소수
console.log(Math.random());

// 0 - 9까지의 랜덤수 만들기
// for (let i = 0; i < 10; i++) {
//   console.log(Math.floor(Math.random() * 10));
// }

// 0 - 10까지의 랜덤수 만들기
// for (let i = 0; i < 11; i++) {
//   console.log(Math.floor(Math.random() * 11));
// }

// 11 - 50까지 랜덤수 만들기(40개의 수)
// for (let i = 0; i < 40; i++) {
//   console.log(Math.floor(Math.random() * 40 + 11));
// }

// 랜덤정수 공식
// Math.floor(Math.random() * 만들 정수 갯수 + 시작값)

// 100 - 110까지 랜덤수 만들기(11개)
for (let i = 0; i < 40; i++) {
  console.log(Math.floor(Math.random() * 11 + 100));
}
