export const getTimerStatus = (startDateTime, endDateTime) => {
  const now = new Date();
  const start = new Date(startDateTime);
  const end = new Date(endDateTime);
  if (now < start) return "scheduled";
  if (now >= start && now <= end) return "active";
  return "expired";
};

export const getBadgeStatus = (status) => {
  switch (status) {
    case "active":
      return "success";
    case "scheduled":
      return "info";
    case "expired":
      return "warning";
    default:
      return "default";
  }
};
