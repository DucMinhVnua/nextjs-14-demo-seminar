import { FormInstance } from "antd";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export type TodoTitleOrCompleted = Todo["title"] | Todo["completed"];

export type TodoKey = keyof Pick<Todo, "title" | "completed">;
export type TodoId = Todo["id"];

export interface FormValues {
  todo: string;
}

export interface TodoContextType {
  todoManager: TodoManagerType;
  formManager: FormManagerType;
}

export interface TodoManagerType {
  todos: Todo[];
  addToDo: (todo: Omit<Todo, "id">) => void;
  removeToDo: (TodoId: TodoId) => void;
  updateTodo: (
    todoId: TodoId,
    key: TodoKey,
    value: TodoTitleOrCompleted
  ) => void;
}

export interface FormManagerType {
  form: FormInstance<any>;
  onFinish: (values: FormValues) => void;
  resetFields: () => void;
}

export interface BearState extends TodoManagerType {}
