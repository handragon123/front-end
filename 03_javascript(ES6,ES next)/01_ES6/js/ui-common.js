{
  // let, const는 블럭안에 선언하면 지역변수이며
  // 각각의 블럭안의 변수는 이름이 같아도 서른 다른 스코프를 가지므로 다른변수로 취급
  const obj = {
    name: 'car',
  };

  // 함수는 함수안에 있을때만 부모함수 스코프로 지정됨
  // 일반 블럭안의 전역함수임
  function fn1() {
    let x = 100;
    {
      let x = 200;
      console.log(x);
    }
  }
  fn1();
}

// 일반함수와 화살표함수의 차이
// 일반함수에서 this는 window
// 객체안에서 this는 해당객체
// 이벤트핸들러(함수선언식)에서 this는 이벤트연결대상
const obj = {
  test: 100,
};

function outerFn2() {
  console.log(this);
  function fn2() {
    console.log(this);
  }
  fn2();
}
outerFn2.call(obj);

// 함수 선언식의 this 는 함수호출시 동적으로 결정되며
// 기본값으로 window지만 call메서드 사용시 this가 가르키는 대상 변경가능
// 화살표 함수의 this는 부모함수의 this와 일치함 (렉시컬 this)
function outerFn3() {
  const fn3 = () => {
    console.log(this);
  };
  fn3();
}
outerFn3.call(obj);

const evens = [2, 4, 6, 8, 10];
console.log(evens);
const odds = evens.map((v) => v + 1);
console.log(odds);
// 매개변서 순서 변경 금지
const nums = evens.map((v, i) => v + i);
console.log(nums);

// 화살표함수안에서 객체 리턴
// const pairs = evens.map((v) => {
//   return {
//     even: v,
//     odd: v - 1,
//   };
// });
// console.log(pairs);
// 화살표함수에서 객체 리턴시 ()로 묶어서 함수블럭이 아님을 알려야함
const pairs = evens.map((v) => ({
  even: v,
  odd: v - 1,
}));
console.log(pairs);

//num 배열 요소를 5로 나눈 나머지가 0인 요소만 새로운 배열로 만들기
const fives = nums.filter((v) => v % 5 === 0);
console.log(fives);

// 화살표함수 사용하지 말아야할 경우
// 1. 객체 메서드-객체 메서드는 일반함수여야 this가 해당 객체를 가르키므로
// 2. addEventListener메서드의 이벤트핸들러로 사용금지 (일반함수여야 this가 이벤트 걸린 요소를 가르키므로)

// 탬플릿문자열(``)백틱 사용하여 변수로 변수값 참조
let animalName = 'tiger';
let age = 13;
// console.log('우리 고양이 이름은 ' + animalName + '이고 나이는' + age + '살');
console.log(
  `우리 "고양이" 이름은 
  ${animalName.toUpperCase()}이고 
  나이는 ${age} 살이다`
);

const now = new Date();
console.log(`오늘 날짜와 시간은 ${now.toLocaleDateString()}`);

// 문자열, 배열 추가 메서드
let str = '사과는 맛있어';
let sub = '';

// 문자열에서 찾는 문자가 있으면 true
console.log(str.includes(sub));

console.log('best'.repeat(3));

const pet = ['고양이', '개', '앵무새'];
// 조건에 맞는 배열요소 찾아서 리턴
let mypet = pet.find((v) => v === '고양이');
let idx = pet.findIndex((v) => v === '고양이');
let idx2 = pet.indexOf('고양이');
console.log(mypet, idx, idx2);

// 구조분해(디스트럭처)
const arr = [1, 2, 3, 4];

// 배열요소 각각을 변수에 할당하기
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// let d = arr[3];

let [a, , , b] = arr;
console.log(a, b);

let job = '이미있는변수';
//객체 구조분해
const luke = {
  job: 'jedi',
  father: 'anakin',
};

// 객체 키와 동일한 이름의 변수여야함
// 동일한 변수명이 있을 경우 이름변경가능
let { job: job2, father } = luke;
console.log(job2);
console.log(father);

// 추가된 객체 리터럴
let fruit = '사과';
let modelNum = 'N001345';

// 변수값을 객체 속성으로 사용
// 변수명을 키로 변수값을 키값으로 사용할 경우 변수명만 넣어줌
const obj2 = {
  fruit,
  // 계산된속성 : 변수값을 키로 사용
  [modelNum]: 100,
};
console.log(obj2);

//기본, 나머지 매개변수, 스프레드 연산자
// 인자가 전달되지 않을 경우 사용할 기본값을 매개변수에 지정
function fn4(x, y = 12) {
  return x + y;
}
console.log(fn4(3, 4));

// 가변인자 함수로 주어진 숫자를 모두 더하시오
// 숫자 10,20,30,40
// 조건: 숫자는 추가 가능
// 출력형태 : '합계: 숫자'
// function sumarry(txt, ...rest) {
//   let sum = 0;

//   for (v of rest) {
//     sum += v;
//   }
//   return txt + sum;
// }
// console.log(sumarry('합계:', 10, 20, 30, 40));

function plusNum(...rest) {
  let sum = 0;

  rest.forEach((v) => {
    sum += v;
  });
  console.log(sum);
  return `합계: ${sum}`;
}
let str2 = plusNum(10, 20, 30, 40);
console.log(str2);

// 스프레드연산자 (전개연산자)
const arr2 = [1, 2, 3];

function fn5(x, y, z) {
  return x + y + z;
}
console.log(fn5(...arr2));

// 기존배열을 변수에 할당하면 복사가 아니며 동일한 배열데이터를 참조
// const newArr2 = arr2;

// 배열복사: 새로운 배열에 기존배열요소를 전개시킴
const newArr2 = [...arr2];
newArr2.push(4);
console.log(newArr2, arr2);

const user = {
  name: 'Smith',
  age: 30,
  country: 'Korea',
};

// 객체 키, 키값 확인하기
for (const key in user) {
  console.log(key, user[key]);
}
