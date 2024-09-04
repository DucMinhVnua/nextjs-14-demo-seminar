import { notification, NotificationArgsProps } from "antd";

type NotificationType = "success" | "info" | "warning" | "error";

interface OpenNotificationOptions
  extends Omit<NotificationArgsProps, "message"> {}

const openNotification = (
  message: string,
  type: NotificationType,
  options?: OpenNotificationOptions
) => {
  notification[type]({
    message,
    ...options,
  });
};

const notificationAdapter = {
  open: openNotification,
};

export default notificationAdapter;
