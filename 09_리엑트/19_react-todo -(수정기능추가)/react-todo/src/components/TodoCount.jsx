import styles from './TodoCount.module.css';

export default function TodoCount({ todos }) {
  // 배열요소중 done이 true인 요소만 새로운 배열로 생성
  const complete = todos.filter((todo) => todo.done === true).length;
  return (
    <div className={styles.todo_count}>
      완료: {complete} / 할 일: {todos.length}
    </div>
  );
}
