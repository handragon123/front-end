import styles from './App.module.css';
import TodoAdd from './components/TodoAdd';
import TodoCount from './components/TodoCount';
import TodoList from './components/TodoList';
import { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <main className={styles.app}>
      <h1>Todo list</h1>
      <TodoCount />
      <TodoAdd todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </main>
  );
}
