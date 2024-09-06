import { useTodos } from "@/app/demo/rerender/context-demo/context/context.todos";
import styles from "./styles.module.scss";
import useTodoBearStore from "@/app/demo/rerender/zustand-demo/hooks/hooks.todos";
import { useEffect } from "react";

function TodoList() {
  const todos = useTodoBearStore((state) => state.todos);

  console.log("TodoList component re-render");

  return (
    <div className={styles.todoList}>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
