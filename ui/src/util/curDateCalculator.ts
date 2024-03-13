export const getCurDate = (): string => {
  const curDate = new Date();
  const year: string = curDate.getFullYear().toString();
  const month: string = (curDate.getMonth() + 1).toString();
  const day: string = curDate.getDate().toString();

  const formattedMonth = month.length === 1 ? "0" + month : month;
  const formattedDay = day.length === 1 ? "0" + day : day;

  return `${year}-${formattedMonth}-${formattedDay}`;
};
