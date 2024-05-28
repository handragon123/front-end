import styles from './TodoAdd.module.css';
import { useRef } from 'react';

export default function TodoAdd({ todos, setTodos }) {
  // 데이터 입력값, 초기값
  const inputRef = useRef(null);
  const idRef = useRef(0);

  // idRef.current += 1;

  function handleAddTodo() {
    // 입력필드에 공백이거나 빈칸일때 내용작성못하게
    if (inputRef.current.value.trim()) {
      // 배열을 복사애서 새로 만들어야하기떄문에 ...spread연산자로 배열(todos)을 받아줘야함
      setTodos([
        ...todos,
        // 데이터 바뀐값
        { id: idRef.current++, text: inputRef.current.value, done: false },
      ]);
      // 배열에 데이터 입력후 input칸 초기화
      inputRef.current.value = '';
    }
  }

  return (
    <div className={styles.todo_add}>
      {/* preventDefault = 엔터시 세로고침 방지 */}
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          // 데이터 입력된값
          ref={inputRef}
          type="text"
          placeholder="할 일을 입력하세요"
          title="할 일을 입력하세요"
        />
        {/* 엔터키 사용위해 type"submit" 해줘야함 */}
        <button type="submit" onClick={handleAddTodo}>
          Add
        </button>
      </form>
    </div>
  );
}
