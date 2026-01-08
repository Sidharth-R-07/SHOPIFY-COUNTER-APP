"use client";
import React from "react";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import "../styles/globals.css";

export default function Providers({ children }) {
  return <AppProvider>{children}</AppProvider>;
}
