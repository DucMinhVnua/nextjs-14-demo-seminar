import { Button, Form, Input } from "antd";
import styles from "./styles.module.scss";
import { useTodos } from "../../context/context.todos";

function TodoForm() {
  const { formManager } = useTodos();

  return (
    <Form
      className={styles.form}
      form={formManager.form}
      onFinish={formManager.onFinish}
    >
      <Form.Item name="todo" className={styles.form_item}>
        <Input type="text" placeholder="Enter your todo" />
      </Form.Item>

      <Button htmlType="submit">Add To do</Button>
    </Form>
  );
}

export default TodoForm;
