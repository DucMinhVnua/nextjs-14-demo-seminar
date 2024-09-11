"use client";

import useNavigate from "@/hooks/useNavigate";
import { Fragment } from "react";
import { dataBtns } from "./data";

export const RENDER_PATH = "/demo/rerender";

export const renderButtons = (
  path: string,
  title: string,
  navigate: (
    method: "push" | "replace",
    path: string,
    options?: any // Options can include various properties for navigation
  ) => void
) => {
  return <button onClick={() => navigate("push", path)}>{title}</button>;
};

function RenderPage() {
  const { navigate } = useNavigate();

  return (
    <main>
      {dataBtns.map(({ path, title }, index) => (
        <div key={index}> {renderButtons(path, title, navigate)}</div>
      ))}
    </main>
  );
}

export default RenderPage;
