import React from "react";

export interface InputProps {
  readonly type: "text" | "password";
  readonly options?: any;
}

export default function Input({ type, options }: InputProps) {
  return <input type={type} {...options} />;
}
