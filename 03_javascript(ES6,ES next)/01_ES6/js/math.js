export function sum(x, y) {
  return x + y;
}

export const pi = 3.14;

// 기본적으로 내보내야하는 함수
// 힌번만 사용가능
// default 는 이름이없어도 불러오는과정에서 불러올수있음
export default function () {
  console.log('기본함수');
}
