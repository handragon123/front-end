# 배열추가 메서드, json객체

```js
// 복합자료형: 배열, 객체, 함수, 정규표현식, 생성자함수
var fruitArr = ['사과', '배', '딸기'];
console.log(fruitArr.indexOf('딸기'));

// 배열요소 '딸기'앞에 바나나를 추가하시오(딸기요소의 위치는 모름)
var idx = fruitArr.indexOf('딸기');
fruitArr.splice(idx, 0, '바나나');
console.log(fruitArr);

// 원본배열 자체를 반복하여 조작
// 과일배열에 '는 맛있어'를 모두 추가하시오
fruitArr.forEach(function (v, i) {
  fruitArr[i] += '는 맛있어';
});
console.log(fruitArr);

// 원본배열
var numArr = [100, 200, 300];

// map메서드 - 원본배열은 그대로두고 새로운 배열로 만들기
// numArr에 *5를 하여 새로운 배열로 만들기
var numArr2 = numArr.map(function (v) {
  return v * 5;
});
console.log(numArr2);

// 원본배열중 200이상인 요소만 새로운 배열로 만들기
var numArr3 = numArr.filter(function (v) {
  return v >= 200;
});
console.log(numArr3);

// 모든 배열요소가 특정조건을 만족하는지 확인
var result = numArr.every(function (v) {
  return v >= 200;
});
console.log(result);

// 원본배열의 왼쪽요소부터 오른쪽으로 연산해줌(누산)
var sum = numArr.reduce(function (prev, current) {
  return prev + current;
});
console.log(sum);

// JSON - 자바스크립트(프론트)와 서버(백엔드) 간의 통신규칙
var car = {
  name: 'car1',
  model: 400,
  color: 'black',
};
console.log(car);

// 자바스크립트객체 -> JSON문자열로 변경
var carJSON = JSON.stringify(car);
console.log(carJSON);

// JSON문자열
var studentJSON = '{"grade":90, "studentName":"ossam", "pass":true}';
var student = JSON.parse(studentJSON);
console.log(student);

// 문자열 앞뒤 공백제거
var str = '   hi!   ';
console.log(str);
str = str.trim();
console.log(str);
```
