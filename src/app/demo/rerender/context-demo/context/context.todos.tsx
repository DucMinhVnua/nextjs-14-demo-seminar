import { createContext, useContext, useState } from "react";
import {
  FormValues,
  Todo,
  TodoContextType,
  TodoId,
  TodoKey,
  TodoTitleOrCompleted,
} from "../type/type.todo";
import { useForm } from "antd/es/form/Form";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext<
  | (TodoContextType & {
      count: number;
      increaseCount: () => void;
    })
  | null
>(null);

export const TodoProvider = ({ children }: any) => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [form] = useForm();

  const increaseCount = () => {
    setCount(count + 1);
  };

  const onFinish = (values: FormValues) => {
    if (Boolean(values.todo?.trim())) {
      addToDo({
        title: values.todo,
        completed: false,
      });
    }

    formManager.resetFields();
  };

  const addToDo = (todo: Omit<Todo, "id">) => {
    setTodos((prev) => [
      ...prev,
      {
        id: uuidv4(),
        ...todo,
      },
    ]);
  };

  const resetFields = () => {
    formManager.form.resetFields();
  };

  const removeToDo = (todoId: TodoId) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  const updateTodo = (
    todoId: TodoId,
    key: TodoKey,
    value: TodoTitleOrCompleted
  ) => {
    setTodos((prev) => {
      const todos = [...prev];

      const index = todos.findIndex((todo) => todo.id === todoId);
      if (index !== -1) {
        todos[index] = {
          ...todos[index],
          [key]: value,
        };
      }

      return [...todos];
    });
  };

  const todoManager = {
    todos,
    addToDo,
    removeToDo,
    updateTodo,
  };

  const formManager = {
    form,
    resetFields,
    onFinish,
  };

  return (
    <TodoContext.Provider
      value={{
        count,
        increaseCount,
        todoManager,
        formManager,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);

  return context || null;
};
