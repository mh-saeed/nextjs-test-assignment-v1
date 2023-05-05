export default function formatDate(arr) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return arr.map((obj) => {
    const date = new Date(obj.created_at);
    const formattedDate = `${date.getDate()} ${
      months[date.getMonth()]
    } ${date.getFullYear()}`;
    return { ...obj, created_at: formattedDate };
  });
}
