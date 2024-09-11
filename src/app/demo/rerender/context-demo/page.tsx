"use client";

import UnrelatedComponent from "@/components/ui/UnrelatedComponent";
import { TodoProvider } from "./context/context.todos";
import styles from "./styles.module.scss";
import TodoForm from "./components/TodoContext/todos.form";
import TodoList from "./components/TodoContext";

export const CONTEXT_DEMO_PATH = "/demo/rerender/context-demo";

export default function ContextDemoPage() {
  return (
    <TodoProvider>
      <div className={styles.page}>
        <div className={styles.containerTodos}>
          <TodoForm />
          <TodoList />
        </div>

        <UnrelatedComponent />
      </div>
    </TodoProvider>
  );
}
