import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <p>{number}</p>
      <button
        type="button"
        onClick={() => {
          // 초기렌더링에선 변경된 값이 아닌 초기값 0을 사용함
          // setNumber(number + 1);
          // setNumber(number + 1);
          // setNumber(number + 1);
          // 동일 렌더링에서 상태를 여러번 변경할 경우 업데이터함수 사용해야함
          setNumber((prev) => prev + 1);
          setNumber((prev) => prev + 1);
          setNumber((prev) => prev + 1);
        }}
      >
        3씩 증가
      </button>
    </div>
  );
}
