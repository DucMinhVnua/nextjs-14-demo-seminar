"use client";

import React, { Fragment, useState } from "react";
import ExampleWrapper from "./components/ExampleWrapper";
import { faker } from "@faker-js/faker";

function ListLoadMorePage() {
  const [prodStates, setProdStates] = useState({
    hasNextPage: true,
    isNextPageLoading: false,
    items: [],
  });

  const loadNextPage = (...args: any) => {
    console.log("loadNextPage: ", args);
    setProdStates((prev) => ({
      ...prev,
      isNextPageLoading: true,
    }));

    setTimeout(() => {
      setProdStates((prev) => {
        return {
          hasNextPage: prev.items.length < 100,
          isNextPageLoading: false,
          items: [...prev.items].concat(
            new Array(10)
              .fill(true)
              .map(() => ({ name: faker.commerce.productName() }))
          ),
        };
      });
    }, 2500);
  };

  return (
    <Fragment>
      <p>This demo app for a list automatically loads the next page</p>
      <ExampleWrapper
        isNextPageLoading={prodStates.isNextPageLoading}
        hasNextPage={prodStates.hasNextPage}
        items={prodStates.items}
        loadNextPage={loadNextPage}
      />
    </Fragment>
  );
}

export default ListLoadMorePage;
