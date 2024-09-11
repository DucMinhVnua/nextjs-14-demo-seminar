"use client";

import React, { useEffect, useState } from "react";
import { AuthType, EmailType, PasswordType } from "./types/types.states";
import { flushSync } from "react-dom";

const data = {
  email: "ongsaoxanh@gmail.com",
  password: "123456",
};

function UpdateStateDemo() {
  const [email, setEmail] = useState<EmailType>("");
  const [password, setPassword] = useState<PasswordType>("");
  const [auth, setAuth] = useState<AuthType>({
    email: "",
    password: "",
  });

  const updateStateCorrectly = () => {
    setAuth({
      email: data.email,
      password: data.password,
    });
  };

  // automatic batching from React 18
  // function used for the FlushSync method to demo the type of incorrect update state
  const updateStateIncorrectly = () => {
    flushSync(() => {
      setEmail(data.email);
    });

    flushSync(() => {
      setPassword(data.password);
    });
  };

  console.log("UpdateStateDemo re-rendered");

  return (
    <div>
      <button onClick={updateStateIncorrectly}>update state incorrectly</button>
      <br />
      <button onClick={updateStateCorrectly}>update state correctly</button>
    </div>
  );
}

export default UpdateStateDemo;
