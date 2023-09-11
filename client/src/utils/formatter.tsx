export const getFormatDate = (_: string) => {
  const date = new Date(_);
  const year = date.getFullYear();
  const month = 1 + date.getMonth();
  const day = date.getDate();
  return `${year}.${month < 10 ? '0' + month : month}.${
    day < 10 ? '0' + day : day
  }`;
};
