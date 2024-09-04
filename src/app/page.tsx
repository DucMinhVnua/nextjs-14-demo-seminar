"use client";

import useNavigate from "@/hooks/useNavigate";
import { Fragment } from "react";
import { dataBtns } from "./data";
import { renderButtons } from "./demo/rerender/page";

import styles from "./styles.module.scss";

export const HOME_PATH = "/";

export default function HomePage() {
  const { navigate } = useNavigate();

  return (
    <main className="min-h-full">
      <div className={styles.wrapper_content}>
        <h1>Choose a option to study</h1>
        <div className={styles.wrapper_options}>
          {dataBtns.map(({ path, title }, index) => (
            <Fragment key={index}>
              {renderButtons(path, title, navigate)}
            </Fragment>
          ))}
        </div>
      </div>
    </main>
  );
}
