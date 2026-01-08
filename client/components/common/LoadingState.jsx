import React from "react";
import { Spinner } from "@shopify/polaris";

const LoadingState = () => (
  <div style={{ textAlign: "center", padding: "40px" }}>
    <Spinner size="large" />
  </div>
);

export default LoadingState;
