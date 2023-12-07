export function getDate(value: string) {
  var d = new Date(value),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("/");
}
export function getDateTime(value: string) {
  const date = new Date(value);
  const timeFormat: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour12: false,
    minute: "2-digit",
    hour: "2-digit",
  };
  return new Intl.DateTimeFormat("vi-VN", timeFormat).format(date);
}