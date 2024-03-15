export const convertDateToString = (date: Date): string => {
  return date.toISOString().slice(0, 10);
};
