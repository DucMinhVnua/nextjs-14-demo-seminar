"use client";

import React from "react";
import styles from "../context-demo/styles.module.scss";
import UnrelatedComponent from "@/components/ui/UnrelatedComponent";
import TodoForm from "@/app/demo/rerender/zustand-demo/components/TodoZustand/todos.form";
import TodoList from "@/app/demo/rerender/zustand-demo/components/TodoZustand";

export const ZUSTAND_DEMO_PATH = "/demo/rerender/zustand-demo";

function ZustandDemoPage() {
  return (
    <div className={styles.page}>
      <div className={styles.containerTodos}>
        <TodoForm />
        <TodoList />
      </div>
      <UnrelatedComponent />
    </div>
  );
}

export default ZustandDemoPage;
