"use client";

import TodoList from "@/app/demo/rerender/context-demo/components/TodoContext";
import TodoForm from "@/app/demo/rerender/context-demo/components/TodoContext/todos.form";
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
