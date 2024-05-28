// this키워드
// 전역에서 this 는 window
console.log(this);

// 함수안에서 this 는 window
function fn1() {
  console.log(this);
}
fn1();

// 객체 메서드 안에서 this는 해당 객체
const obj = {
  num: 200,
  showNum: function () {
    console.log(this, '===');
    // this 바인딩
    // 키워드를 변수명으로 사용시 _ 사용
    let _this = this;

    function inner() {
      console.log(_this.num, '====');
    }
    inner();
  },
};
obj.showNum();

// 이벤트헨들러 함수안에서 this는 이벤트 연결대상
window.addEventListener('DOMContentLoaded', function () {
  const testBtn = document.querySelector('.test_btn');

  // 화살표 함수는 this가 생성시점에 결정 (렉시컬 this)
  // 화살표 함수의 부모함수의 this와 일치함 - window
  // 이벤트헨들러는 화살표함수 대신 함수선언식 사용할것
  testBtn.addEventListener('click', function () {
    console.log(this);
  });
});

// 함수의 this를 객체로 바인딩
const student = {
  name: ['홍길동', '슈퍼맨'],
};

function showName(num1, num2) {
  console.log(this.name, num1, num2);
}
// showName.call(student, 100, 200);
// 인자가 배열인 경우 사용
showName.apply(student, [100, 200]);
