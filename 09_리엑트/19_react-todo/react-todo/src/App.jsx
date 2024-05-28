import { useState } from 'react';
import TodoCount from './components/TodoCount.jsx';
import TodoAdd from './components/TodoAdd.jsx';
import TodoList from './components/TodoList.jsx';
import styles from './App.module.css';

export default function App() {
  // todos 배열로 초기화
  const [todos, setTodos] = useState([]);

  // 리스트 컴포넌트 만들기전 배열 확인
  console.log(todos);

  return (
    <main className={styles.app}>
      <h1>Todo List</h1>
      <TodoCount todos={todos} />
      <TodoAdd todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </main>
  );
}
