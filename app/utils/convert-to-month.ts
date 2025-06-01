export function convertToMonth(date: string): string {
  const month = new Date(date)
    .toLocaleDateString("UK")
    .split("T")[0]
    .split(".")[1];
  const year = new Date(date)
    .toLocaleDateString("UK")
    .split("T")[0]
    .split(".")[2];

  switch (month) {
    case "01":
      return `January, ${year}`;
    case "02":
      return `February, ${year}`;
    case "03":
      return `March, ${year}`;
    case "04":
      return `April, ${year}`;
    case "05":
      return `May, ${year}`;
    case "06":
      return `June, ${year}`;
    case "07":
      return `July, ${year}`;
    case "08":
      return `August, ${year}`;
    case "09":
      return `September, ${year}`;
    case "10":
      return `October, ${year}`;
    case "11":
      return `November, ${year}`;
    case "12":
      return `December, ${year}`;
    default:
      return "";
  }
}
