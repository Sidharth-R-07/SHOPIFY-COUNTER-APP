export const formatDateTime = (dateTime) => {
  if (!dateTime) return "";
  const date = new Date(dateTime);
  return date.toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatDateForInput = (dateTime) => {
  if (!dateTime) return "";
  const date = new Date(dateTime);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${month}/${day}/${year}`;
};

export const formatTimeForInput = (dateTime) => {
  if (!dateTime) return "";
  const date = new Date(dateTime);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

export const combineDateTime = (dateStr, timeStr) => {
  if (!dateStr || !timeStr) return null;
  const [month, day, year] = dateStr.split("/");
  const [hours, minutes] = timeStr.split(":");
  return new Date(year, month - 1, day, hours, minutes).toISOString();
};
