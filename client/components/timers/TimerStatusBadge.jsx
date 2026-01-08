import React from "react";
import { Badge } from "@shopify/polaris";
import { getTimerStatus, getBadgeStatus } from "../../utils/statusUtils";

const TimerStatusBadge = ({ startDateTime, endDateTime }) => {
  const status = getTimerStatus(startDateTime, endDateTime);
  return (
    <Badge status={getBadgeStatus(status)}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
};

export default TimerStatusBadge;
