"use client";

import React, { memo } from "react";

const ChildComponent = ({ count }: { count: number }) => {
  console.log("ChildComponent re-rendered");
  return <div>Count: {count}</div>;
};

export default memo(ChildComponent);
