// Number 내장객체
let pi = 3.14159297;
// let pi = new Number (3.14159297);
console.log(typeof pi, pi.toFixed(5));

// string 객체
let str = '안녕하세요';
console.log(str.length);

// prompt메서드로 비밀번호를 입력받고 8글자미만이면
// 8글자 이상 입력하라는 alert을 띄우고 아니면 비밀번호 길이를 띄워줌

// let password = prompt('비밀번호를 입력하시오');
// console.log(password);
// if (password.length <= 8) {
//   alert('8글자 이상 입력하시오');
// } else {
//   alert(password.length);
// }

let str2 = '안,녕,하,세,요';
let str3 = 'abcdefg';

// 인덱스에 해당하는 문자 반환
console.log(str2.charAt(1));
// 문자열 연결
console.log(str2.concat(str3));
// 해당 문자의 시작위치 알려줌
console.log(str2.indexOf('하세'));

// indexof사용 값이 있을 경우 0이상 없을 경우 -1이므로 조건식을 명확하게 걸어야함
if (str2.indexOf('세') !== -1) {
  console.log('있음');
} else {
  console.log('없음');
}

// 문자열 변경하기
console.log(str2.replace('안녕', '잘가'));

// 문자열 일부 잘라내기
// 시작인덱스, 끝인덱스전
console.log(str2.slice(0, 2));
// 매개변수 입력된 것을 기준으로 하여 문자열을 잘라서 리턴
console.log(str2.split(':'));
console.log(str3.substring(0, 2));
