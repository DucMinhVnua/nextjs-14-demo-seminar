import React, { useEffect } from "react";
import { useTodos } from "@/app/demo/rerender/context-demo/context/context.todos";
import styles from "./styles.module.scss";
import useTodoBearStore from "@/app/demo/rerender/zustand-demo/hooks/hooks.todos";

function UnrelatedComponent() {
  const todoManager = useTodos();
  const countTestInBear = useTodoBearStore((state) => state.count);

  console.log("Unrelated component rendered");

  return (
    <span className={styles.count}>
      {todoManager?.count || countTestInBear}
    </span>
  );
}

export default UnrelatedComponent;
