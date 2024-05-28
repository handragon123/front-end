# react-todo(할일수정추가)

```js
// App.jsx
import { useState } from 'react';
import styles from './App.module.css';
import TodoCount from './components/TodoCount';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import TodoEdit from './components/TodoEdit';

export default function App() {
  // 할일 목록 배열
  const [todos, setTodos] = useState([]);
  // 할일 수정 토글
  const [toggleEdit, setToggleEdit] = useState(false);
  // 수정버튼 클릭시 선택된 할일
  const [selectedTodo, setSelectedTodo] = useState({});
  // console.log(todos);

  return (
    <main className={styles.app}>
      <h1>Todo List</h1>
      <TodoCount todos={todos} />
      <TodoAdd todos={todos} setTodos={setTodos} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        setToggleEdit={setToggleEdit}
        setSelectedTodo={setSelectedTodo}
      />
      {toggleEdit && (
        <TodoEdit
          todos={todos}
          setTodos={setTodos}
          setToggleEdit={setToggleEdit}
          selectedTodo={selectedTodo}
          setSelectedTodo={setSelectedTodo}
        />
      )}
    </main>
  );
}
```

```js
// TodoList.jsx
import styles from './TodoList.module.css';
import TodoItem from './TodoItem';

export default function TodoList({
  todos,
  setTodos,
  setToggleEdit,
  setSelectedTodo,
}) {
  return (
    <ul className={styles.todo_list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          setToggleEdit={setToggleEdit}
          setSelectedTodo={setSelectedTodo}
        />
      ))}
    </ul>
  );
}
```

```js
// TodoItem.jsx
import styles from './TodoItem.module.css';
import { useId, useState } from 'react';

export default function TodoItem({
  todo,
  todos,
  setTodos,
  setToggleEdit,
  setSelectedTodo,
}) {
  const inputId = useId();

  // 배열중 id가 같은 요소만 객체중 done값을 업데이트
  function handleDone() {
    setTodos(
      todos.map((t) => (t.id === todo.id ? { ...t, done: !t.done } : t))
    );
  }

  function handleRemove() {
    // todos배열 전체요소와 todo로 전달된 배열요소 각각의 id를 비교하여
    // 같지않은 요소만 새로운 배열로 생성
    setTodos(todos.filter((t) => t.id !== todo.id));
  }

  // 할일 수정 보이기
  // 전달된 todo객체로 App컴포넌트 상태 업데이트
  function handleShowEdit() {
    setToggleEdit(true);
    setSelectedTodo(todo);
  }

  return (
    <li className={styles.todo_item}>
      <input id={inputId} type="checkbox" />
      <label
        className={todo.done ? styles.on : ''}
        htmlFor={inputId}
        onClick={handleDone}>
        {todo.text}
      </label>
      <button
        className={styles.edit_btn}
        type="button"
        onClick={handleShowEdit}>
        edit
      </button>
      <button type="button" onClick={handleRemove}>
        remove
      </button>
    </li>
  );
}
```

```js
// TodoEdit.jsx
import { useRef } from 'react';

export default function TodoEdit({
  todos,
  setTodos,
  setToggleEdit,
  selectedTodo,
  setSelectedTodo,
}) {
  const inputRef = useRef(null);

  // 선택된 todo 업데이트
  function handleEdit(e) {
    setSelectedTodo({ ...selectedTodo, text: inputRef.current.value });
  }

  // 배열요소들의 id와 선택된 할일 id가 동일하면 배열데이터 업데이트
  function handleOk() {
    setTodos(
      todos.map((t) =>
        t.id === selectedTodo.id ? { ...t, text: inputRef.current.value } : t
      )
    );
    // edit UI 끄기
    setToggleEdit(false);
  }

  return (
    <div className="todo_edit">
      {/* value 사용시 onChange필수 */}
      <input
        ref={inputRef}
        type="text"
        value={selectedTodo.text}
        onChange={handleEdit}
      />
      <button type="button" onClick={handleOk}>
        Ok
      </button>
    </div>
  );
}
```
