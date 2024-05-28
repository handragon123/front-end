import { useState } from 'react';
import TodoCount from './components/TodoCount.jsx';
import TodoAdd from './components/TodoAdd.jsx';
import TodoList from './components/TodoList.jsx';
import TodoEdit from './components/TodoEdit.jsx';
import styles from './App.module.css';

export default function App() {
  // todos 배열로 초기화
  const [todos, setTodos] = useState([]);
  const [toggleEdit, setToggleEdit] = useState(false);
  // edit버튼 클릭시 선택된 todo객체
  const [selectedTodo, setSelectedTodo] = useState();

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
      {/* edit누르면 todoEdit창 나오는기능 */}
      {toggleEdit && (
        <TodoEdit
          setToggleEdit={setToggleEdit}
          selectedTodo={selectedTodo}
          setSelectedTodo={setSelectedTodo}
          todos={todos}
          setTodos={setTodos}
        />
      )}
    </main>
  );
}
