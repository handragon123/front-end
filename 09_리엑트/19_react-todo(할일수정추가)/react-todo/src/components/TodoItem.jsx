import styles from './TodoItem.module.css';
import { useId } from 'react';

export default function TodoItem({ todo, todos, setTodos }) {
  // 체크박스
  const inputId = useId();

  // 배열요소중 id가 같은 요소만 객체중 done값을 업데이트
  function handleDone() {
    setTodos(
      todos.map((t) => (t.id === todo.id ? { ...t, done: !t.done } : t))
    );
  }

  function handleRemove() {
    // todos배열 전체요소와 todo로 전달된 배열요소 각각의 id를 비교하여
    // 같지않은 요소만 새로운 배열로 전달
    setTodos(todos.filter((t) => t.id !== todo.id));
  }

  return (
    <li className={styles.todo_item}>
      <input id={inputId} type="checkbox" />
      <label
        className={todo.done ? styles.on : ''}
        htmlFor={inputId}
        onClick={handleDone}
      >
        {todo.text}
      </label>
      <button type="button" onClick={handleRemove}>
        remove
      </button>
    </li>
  );
}
