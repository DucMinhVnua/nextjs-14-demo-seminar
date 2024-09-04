import { useTodos } from "@/app/demo/rerender/context-demo/context/context.todos";
import styles from "./styles.module.scss";

function TodoList() {
  const { todoManager } = useTodos();

  console.log("TodoList component re-render");

  return (
    <div className={styles.todoList}>
      <ol>
        {todoManager.todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
