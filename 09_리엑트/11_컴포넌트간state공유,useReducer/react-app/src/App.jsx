import './App.css';
import { useReducer, useState } from 'react';

function counterReducer(state, action) {
  switch (action.type) {
    case 'increase':
      return { count: state.count + 1 };
    case 'decrease':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// useReducer를 이용한 카운터 만들기
export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <>
      <p>Count: {state.count}</p>
      <button type="button" onClick={() => dispatch({ type: 'increase' })}>
        증가
      </button>
      <button type="button" onClick={() => dispatch({ type: 'decrease' })}>
        감소
      </button>
    </>
  );
}
