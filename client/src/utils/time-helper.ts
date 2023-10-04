export const timeHelper = (date: string) => {
  let changeTime = '';
  const thisTime = new Date();
  const createTime = new Date(date);
  if (thisTime.getFullYear() !== createTime.getFullYear())
    return thisTime.getFullYear() - createTime.getFullYear() + '년';
  if (thisTime.getMonth() !== createTime.getMonth())
    return thisTime.getMonth() - createTime.getMonth() + '월';
  if (thisTime.getDate() !== createTime.getDate())
    return thisTime.getDate() - createTime.getDate() + '일';
  if (thisTime.getHours() !== createTime.getHours())
    return thisTime.getHours() - createTime.getHours() + '시간';
  if (thisTime.getMinutes() !== createTime.getMinutes())
    return thisTime.getMinutes() - createTime.getMinutes() + '분';
  changeTime = `방금`;

  return changeTime;
};

export const postTimeChangeHelper = (inputDateStr: Date | undefined) => {
  if (inputDateStr) {
    const inputDate = new Date(inputDateStr);
    const year = inputDate.getFullYear();
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
    const day = inputDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
};
