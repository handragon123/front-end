// named epxort: 함수, 변수명으로 내보내고
// 사용하는 파일에서 import {} 객체구조분해로 받아서 사용
// 동일 변수명이 있을경우 as로 이름 변경 가능
// 상대 경로에 ./ 써야함
// default 는 받아오는 과정에서 한번만 사용가능하며 이름변경가능
// dafault 는 중괄호없이 앞에서 가장 먼저 받아야함
import s3, { sum, pi as pi2 } from './math.js';

let pi = 3.1415;

let result = sum(10, 20);
console.log(result, pi2);
s3();

// 프라미스 객체
// 비동기로 데이터 가져올때 사용
// 프라미스 객체를 리턴
function promise1(param) {
  return new Promise((resolve, reject) => {
    if (param) {
      resolve('완료');
    } else {
      reject(new Error('에러 발생!!!'));
    }
  });
}

// 프라미스객체가 리턴되면 then으로 reslove의 값을 받고
// error발생시 catch로 reject의 에러객체를 받아서 확인한다
promise1(false)
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message));

// 프라미스 제이닝
// resolve 호출이후 then에서 첫번째 실행
// return 값 받으며 순차적으로 실행

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then((result) => {
//     alert(result);
//     return result * 2;
//   })
//   .then((result) => {
//     alert(result); // 2
//     return result * 2;
//   })
//   .then((result) => {
//     alert(result); // 4
//     return result;
//   });

// fetch메서드로 데이터 가져오기
// fetch메서드로 데이터를 가져오면 프라미스객체가 리턴
// response 응답객체로 데이터 정보를 받음
// response.json(): 자바스크립트 객체로 변경

// 동적으로 나중에 객체를 넣을경우 null로 초기화

const tit = document.querySelector('.tit');
const txt = document.querySelector('.txt');

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => {
//     const post = json;
//     console.log(post);

//     tit.innerHTML = post.title;
//     txt.innerHTML = post.body;
//   });

// async 키워드가 있으면 비동기 함수임을 나타냄
// await 키워드 사용가능, 프라미스를 리턴하는 부분에만 사용가능
async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const post = await response.json();

  tit.innerHTML = post.title;
  txt.innerHTML = post.body;
}
fetchData();
