import { useRef } from 'react';
import styles from './TodoEdit.module.css';

export default function TodoEdit({
  setToggleEdit,
  selectedTodo,
  setSelectedTodo,
  todos,
  setTodos,
}) {
  const inputRef = useRef(null);
  // 선택된 todo객체 업데이트
  function handleEdit(e) {
    setSelectedTodo({ ...selectedTodo, text: e.target.value });
  }
  function handleOk() {
    setTodos(
      todos.map((t) =>
        t.id === selectedTodo.id ? { ...t, text: inputRef.current.value } : t
      )
    );
    setToggleEdit(false);
  }
  function handleEnter(e) {
    if (e.key === 'Enter') {
      handleOk();
    }
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.todo_edit}>
        <input
          type="text"
          value={selectedTodo.text}
          onChange={handleEdit}
          ref={inputRef}
          onKeyUp={handleEnter}
        />
        <button
          type="button"
          onClick={handleOk}
          className={`btn ${styles.ok_btn}`}
        >
          ok
        </button>
      </div>
    </div>
  );
}
