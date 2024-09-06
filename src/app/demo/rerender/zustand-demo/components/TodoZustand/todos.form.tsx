import { useTodos } from "@/app/demo/rerender/context-demo/context/context.todos";
import { Button, Form, Input } from "antd";
import styles from "./styles.module.scss";
import useTodoBearStore from "@/app/demo/rerender/zustand-demo/hooks/hooks.todos";
import { useForm } from "antd/es/form/Form";
import { FormValues } from "@/app/demo/rerender/context-demo/type/type.todo";

function TodoForm() {
  const addToDo = useTodoBearStore((state) => state.addToDo);
  const [form] = useForm();

  const resetFields = () => {
    form.resetFields();
  };

  const onFinish = (values: FormValues) => {
    if (Boolean(values.todo?.trim())) {
      addToDo({
        title: values.todo,
        completed: false,
      });
    }

    resetFields();
  };

  return (
    <Form className={styles.form} form={form} onFinish={onFinish}>
      <Form.Item name="todo" className={styles.form_item}>
        <Input type="text" placeholder="Enter your todo" />
      </Form.Item>

      <Button htmlType="submit">Add To do</Button>
    </Form>
  );
}

export default TodoForm;
