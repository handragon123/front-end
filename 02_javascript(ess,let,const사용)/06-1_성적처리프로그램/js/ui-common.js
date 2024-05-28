window.addEventListener('DOMContentLoaded', function () {
  const resultBtn = document.querySelector('.main_score .result_btn');



  // 재사용, 가독성 측면에서 함수로 포장
  function getScore() {
    // parseInt함수 입력값을 문자에서 숫자로 바꿔줌
    let kor = parseInt(document.getElementById('score1').value);
    let eng = parseInt(document.getElementById('score2').value);
    let math = parseInt(document.getElementById('score3').value);
    // 입력필드값이 문자일 경우 함수 종료
    if(isNaN(kor)||(eng)||(math)) {
      alert('숫자를입력하시오');
      return;
    }
    console.log(kor, eng, math);

    let average = ((kor + eng + math) / 3).toFixed(2);
    let pass = average >= 60 ? '합격' : '불합격';
    

    // let result = '국어점수: ' + kor + '<br>';
    // result += '영어점수: ' + eng + '<br>';
    // result += '수학점수: ' + math + '<br>';
    // result += '평균점수: ' + average;

    // ES6
    // 백틱('')문자열: 줄바꿈 허용, 변수는 ${}로 표현
    let result = `국어점수: ${kor}<br>
    영어점수:${eng}<br>
    수학점수:${math}<br>
    평균점수:${average}<br>
    합격여부:${pass}`;

    document.querySelector('.main_score .message').innerHTML = result;
  }

  // 기명(이름있는함수)함수를 콜백함수로 전달할 경우 이름만 사용
  resultBtn.addEventListener('click', getScore);
});
