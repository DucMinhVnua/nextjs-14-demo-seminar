import { useForm } from "antd/es/form/Form";
import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import {
  BearState,
  Todo,
  TodoId,
  TodoKey,
  TodoTitleOrCompleted,
} from "../../context-demo/type/type.todo";

const useTodoBearStore = create<
  BearState & {
    count: number;
  }
>()((set, get) => {
  const addToDo = (todo: Omit<Todo, "id">) => {
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: uuidv4(),
          ...todo,
        },
      ],
    }));
  };

  const removeToDo = (todoId: TodoId) => {
    set((state) => {
      const todos = state.todos.filter((todo) => todo.id !== todoId);

      return {
        todos,
      };
    });
  };

  const updateTodo = (
    todoId: TodoId,
    key: TodoKey,
    value: TodoTitleOrCompleted
  ) => {
    set((state) => {
      const todos = [...state.todos];

      const index = todos.findIndex((todo) => todo.id === todoId);
      if (index !== -1) {
        todos[index] = {
          ...todos[index],
          [key]: value,
        };
      }

      return {
        todos,
      };
    });
  };

  return {
    count: 0,
    todos: [],
    addToDo,
    removeToDo,
    updateTodo,
  };
});

export default useTodoBearStore;
