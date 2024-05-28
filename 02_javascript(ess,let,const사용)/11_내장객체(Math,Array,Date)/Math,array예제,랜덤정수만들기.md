# Math, Array 내장객체

```js
var fruit = ['사과', '배', '딸기'];
console.log(typeof fruit, fruit.length, fruit[1]);

var fruit2 = ['바나나', '포도'];

// 배열을 합쳐서 새로운 배열로 리턴
console.log(fruit.concat(fruit2), fruit);

// 배열을 문자로 변경, 인자로 빈칸을 넣으면 구분기호없어짐
console.log(fruit.join(''));

// 배열 오른쪽 끝에 요소 추가
fruit.push('파인애플');
console.log(fruit);

// 배열 오른쪽 끝요소 삭제하고 리턴
var newFruit = fruit2.pop();
console.log(fruit2, newFruit);

var str1 = ['가', '나', '다'];

// 배열요소 순서 거꾸로
console.log(str1.reverse());

// 배열의 왼쪽 첫번째 요소 삭제
str1.shift();
console.log(str1);

// 배열의 왼쪽 첫번째에 요소 추가
str1.unshift('오');
console.log(str1);

var num = [10, 20, 30, 40, 50];

// 시작위치부터 끝위치-1까지 잘라짐
// console.log(num.slice(1, 4));

// 인덱스가 -이면 뒤에서부터의 순서를 의미
console.log(num.slice(-4, -2));

var num2 = [10, 30, 5, 100, 90];

// 배열 오름차순정렬
var newNum2 = num2.sort(function (a, b) {
  return a - b;
});
console.log(newNum2);

// 배열 내림차순정렬
var newNum3 = num2.sort(function (a, b) {
  return b - a;
});
console.log(newNum3);

var str2 = ['가', '다', '나', '차', '사'];

// 문자 오름차순은 콜백함수없이 사용
var str3 = str2.sort();
console.log(str3);

// 문자 내림차순 정렬, 메서드체인(앞쪽 리턴값이 배열이므로)
var str4 = str2.sort().reverse();
console.log(str4);

// Date객체
var now = new Date();

// 현재지역의 날짜형식에 맞는 문자열로 변환
console.log(now.toLocaleString());
console.log(now.toTimeString());

var num3 = 10.49;

// 소수 버리고 정수변환
console.log(Math.floor(num3));
// 소수 반올림
console.log(Math.round(num3));
// 소수 올림
console.log(Math.ceil(num3));

// 랜덤수 만들기
// 0부터 1미만의 랜덤수
// console.log(Math.random());

// 0 - 9까지의 랜덤수 만들기
// for (var i = 0; i < 10; i++) {
//   console.log(Math.floor(Math.random() * 10), '==');
// }

// 0 - 10까지의 랜덤수 만들기(11개 숫자)
// for (var i = 0; i < 11; i++) {
//   console.log(Math.floor(Math.random() * 11), '==');
// }

// 11 - 50까지 랜덤수 만들기(40개의 수)
// for (var i = 0; i < 40; i++) {
//   console.log(Math.floor(Math.random() * 40 + 11), '==');
// }

// 랜덤정수 공식
// Math.floor(Math.random() * 만들정수갯수 + 초기값)

// 100 - 110까지 랜덤수 만들기(11개)
for (var i = 0; i < 11; i++) {
  console.log(Math.floor(Math.random() * 11 + 100), '==');
}
```
