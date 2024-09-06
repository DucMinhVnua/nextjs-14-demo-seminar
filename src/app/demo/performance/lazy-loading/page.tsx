/**
 * ReactJS uses a combination React.Lazy and Suspense
 * NextJS uses a dynamic
 */

"use client";

import React from "react";
import dynamic from "next/dynamic";
import { delayImport } from "@/utils/utils.app";
// import ProductList from "./components/ProductList";
// import SalesChart from "./components/SalesChart";

const ProductList = dynamic(() => import("./components/ProductList"), {
  loading: () => <p>Loading Product List...</p>,
  ssr: false,
});

const SalesChart = dynamic(
  () => delayImport(() => import("./components/SalesChart"), 3000),
  {
    loading: () => <p>Loading SalesChart component...</p>,
    ssr: false,
  }
);

function LazyLoadingDemoPage() {
  return (
    <div>
      <h1>Next.js Dynamic Import Demo</h1>
      <ProductList />
      <SalesChart />
    </div>
  );
}

export default LazyLoadingDemoPage;
