"use client";

import React, { useState } from "react";
import ChildComponent from "./components/ChildComponent";

function MemoDemoPage() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  return (
    <div>
      <h1>Parent Component {otherState}</h1>
      <ChildComponent count={count} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br />
      <button onClick={() => setOtherState(otherState + 1)}>
        Update Other State
      </button>
    </div>
  );
}

export default MemoDemoPage;
