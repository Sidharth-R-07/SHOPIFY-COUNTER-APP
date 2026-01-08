import React from "react";
import { Page } from "@shopify/polaris";

const PageHeader = ({ title, subtitle, primaryAction, children }) => (
  <Page title={title} subtitle={subtitle} primaryAction={primaryAction}>
    {children}
  </Page>
);

export default PageHeader;
