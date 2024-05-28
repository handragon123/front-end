// 객체: 데이터를 구조화, {키:값, 키:값}
// 객체리터럴
const car = {
  carName: 'sonata',
  model: 400,
  color: 'black',
  'navi model': '아이나비',
  company: {
    manufacture: '현대',
    year: '2024',
  },
  // 메서드: 객체안에서 만든 함수
  moveCar: function () {
    console.log('car객체의 메서드 실행');
    // 일반함수에서 this는 window임
    // 메서드안에서 this키워드는 해당객체를 가르킨다
    console.log(this.carName + '가 이동합니다');
  },
};
// console.log(car, typeof car);

// 객체 속성접근, []는 키가 동적으로 생성될 경우 사용
// 키가 문자열일 경우 []사용
console.log(car.carName, car['carName'], car['navi model']);
// 제조년도에 접근
console.log(car.company.year);
car.moveCar();

// 객체 전용 반복문
for (const item in car) {
  // 객체의 키 확인
  console.log(item, '===');
  // 객체 키값 확인
  console.log(car[item], '>>>');
}

// 객체안에 속성 존재 여부 확인
console.log('color' in car);

// 객체에 동기적으로 속성추가
car.speed = '300km';
// 메서드 추가
car.changeColor = function () {
  this.color = 'red';
};
car.changeColor();
console.log(car);

// 객체 속성 제거
delete car.color;
console.log(car);

// ES6 객체 메서드 표기법
// ES6 메서드표기법은 값으로 타입들을 대입시킬수 없으므로 사용 자제
// 객체 메서드로 화살표 함수 사용시 this가 해당객체를 가리키지않음
// 결론: 메스트 생성시 es5 함수선언식 사용할것
const user = {
  userId: 'hanyong',
  // checkId() {
  //   console.log(this.userId);
  // },
  // checkId: () => {
  //   console.log(this);
  // },
  checkId: function () {
    console.log(this.userId);
  },
};
user.checkId();
