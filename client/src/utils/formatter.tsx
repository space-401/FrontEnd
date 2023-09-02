export const getFormatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = 1 + date.getMonth();
  const day = date.getDate();
  return `${year}-${month < 10 ? '0' + month : month}-${
    day < 10 ? '0' + day : day
  }`;
};
