"use client";

import TodoList from "@/components/ui/TodoContext";
import TodoForm from "@/components/ui/TodoContext/todos.form";
import UnrelatedComponent from "@/components/ui/UnrelatedComponent";
import { TodoProvider } from "./context/context.todos";
import styles from "./styles.module.scss";

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
