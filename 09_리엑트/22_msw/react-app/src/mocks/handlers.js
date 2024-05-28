// 백엔드 api생성
import { http, HttpResponse } from 'msw';
import people from './dummy.json';
console.log(people);

// 요청에대한 응답 핸들러
export const handlers = [
  // async = 비동기식 함수사용시 사용 await는 비동기식 함수라 async사용해야함
  http.get('/people', async () => {
    await sleep(200);

    // 배열데이터를 json으로 응답
    return HttpResponse.json(people);
  }),
  // 데이터 생성(create), post요청시 request객체로 데이터가 들어옴
  http.post('/peopel', async ({ request }) => {
    await sleep(200);
    // 요청 body의 내용을 js객체로 변환
    const item = await request.json();

    people.push(item);

    return HttpResponse.json(people);
  }),
];

// 데이터 전송시 시간이 걸리므로 지연시간 걸어 서버환경과 비슷하게 동작하게 하는 함수
async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
