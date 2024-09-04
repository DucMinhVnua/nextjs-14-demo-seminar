import { MANAGEMENT_PATH } from "./demo/management/page";
import { MIDDLEWARE_PATH } from "./demo/middleware/page";
import { RENDER_PATH } from "./demo/rerender/page";

export const dataBtns = [
  {
    path: RENDER_PATH,
    title: "Case compare re-render children component",
  },
  {
    path: MIDDLEWARE_PATH,
    title: "Case compare middleware",
  },
  {
    path: MANAGEMENT_PATH,
    title: "Case compare how to management",
  },
];
